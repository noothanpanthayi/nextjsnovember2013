
export default async function getUsers() {
 const response=await fetch("https://jsonplaceholder.typicode.com/users");

 if (!response.ok){
    throw new Error("Error Encounterd")
 }

 return await response.json();
}
