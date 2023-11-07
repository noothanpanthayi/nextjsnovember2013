import Link from 'next/link';
import Header from './components/Header';
import Image from 'next/image';
import getUsers from './libs/getUsers';

const getData=async()=>{
  const res=await fetch("https://jsonplaceholder.typicode.com/users");//cached by default
  if (!res.ok){
    throw new Error('Failed to fetch data');
  }
  // const data=await res.json()
  return res.json()
}

const getDogs=async()=>{
  const dogsHeader=await fetch("https://dog.ceo/api/breeds/image/random");
  if (!dogsHeader.ok){
    throw new Error('Failed to fetch data');
  }
  return dogsHeader.json()
}

const getDogsCached=async()=>{
  const dogsHeader=await fetch("https://dog.ceo/api/breeds/image/random",
  {cache:'no-cache'});
  if (!dogsHeader.ok){
    throw new Error('Failed to fetch data');
  }
  return dogsHeader.json()
}

export default async function Home() {
  const users=await getData();
  const dog=await getDogs();
  const dogCached=await getDogsCached();

  const usersJp:any=await getUsers();
  console.log("@@@@@@ usersJp", usersJp)
  return <div>
    {
      users.map(({name, id}:{id:string, name:string})=>{
        return <div key={id}>{name}</div>
      })
    }

    <hr/>
<div>
{
      usersJp && usersJp.map(({name, id}:{id:string, name:string})=>{
        return <div key={id}>{name}</div>
      })
    }
</div>
   
      <Link href="/users">Go to Users</Link>
      <Header/>
      <Image src={dog.message} width={350} height={50} alt="dogs" priority />
      <Image src={dogCached.message} width={350} height={50} alt="dogs" priority />
    </div>
  
}
