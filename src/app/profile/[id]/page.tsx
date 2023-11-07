"use client"
import React from 'react';
import { useParams, useRouter } from 'next/navigation';


interface profileProps {
    params:{
        id:string
    }
}
export default function ProfileId({params}:profileProps) {//works in server component
    const params2=useParams();
    const router=useRouter();
  return <div>
    <h1>Profile {params.id}</h1>
    <div onClick={()=>router.push('/profile')}>Back to main page</div>

    <div onClick={()=>router.back()}>Back to main page</div>
    
    </div>
}
