'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';


import React from 'react'

export default function Profile() {
  const router=useRouter();

  console.log('router ', router);

  return <div>
    <Link href="/profile/1">Link Profile 1</Link><br/>
    <Link href="/profile/2">Link Profile 2</Link><br/>
    <Link href="/profile/3">Link Profile 3</Link><br/>
    <Link href="/profile/3?userName=Krishnan&userId=12&age=18">Link Profile 3</Link><br/>

    <Link href={{
      pathname:'/profile/3',
      query:{
        userName:"Krishnan",
        userId:12,
        person:JSON.stringify({
          age:18
        })
      }
    }}>Link With Query</Link>
    
    <Link href="http://www.relaxinthelounge.com">Relax</Link><br/>


    <div onClick={()=>router.push('/profile/1')}>Profile 1</div>
    <div onClick={()=>router.push('/profile/2')}>Profile 2</div>
    <div onClick={()=>router.push('/profile/3')}>Profile 3</div>
    </div>
}
 