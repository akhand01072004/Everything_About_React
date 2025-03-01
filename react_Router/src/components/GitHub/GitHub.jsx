import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

const GitHub = () => {
    const [data,setData]= useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/akhand01072004')
        .then(reponse => reponse.json())
        .then(data =>{
            console.log(data);
            setData(data)
        })
    },[])
  return (
    <>
    <div className='w-full h-screen bg-gray-300'>
        <div className="flex justify-center items-center h-screen">
            <img className="h-48 w-48 rounded-full"src={data.avatar_url} alt="" />
            <span className='text-2xl '>{data.login}</span>
        </div>
        <div></div>
    </div>
    </>
  )
}

export default GitHub