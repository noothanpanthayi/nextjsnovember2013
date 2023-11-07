'use client';
import { useParams } from 'next/navigation'
import React from 'react'

export default function Post() {
    const params=useParams();
  return <>
    <div>Post Id {params.postid}</div>
    <div>Id {params.id}</div>
    </>
}
