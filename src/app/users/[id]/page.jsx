import React from 'react'
import getUser from '../../libs/getUser'

export default async function page({params:{id}}) {
  const user=await getUser(id);
  return (
    <div>{user.name}</div>
  )
}


