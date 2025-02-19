import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    const data = useLoaderData()

    // const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/prince531')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })

    // },[])
    
  return (
    <div className='text-center m-4 bg-purple-400 text-black p-4 text-3xl'>Github followers:{data.followers}
    <img className='w-1/4 rounded-xl shadow-2xl ml-2' src={data.avatar_url} alt="Git image" style={{boxShadow:"1px 1px 32px 1px rgba(0, 0, 0, 0.9)"}} />    
    </div>
  )
}
export default Github;

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/prince531')
    return response.json()
}