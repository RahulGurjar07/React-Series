import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {

    // loader ka use karne ke liye useLoaderData hook ka use karne se data milega

    const data = useLoaderData()

    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch('https://api.github.com/users/RahulGurjar07')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //         setData(data)
    //     })
    // },[])

  return (
    <div className='flex justify-evenly m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: 
    {data.followers}
    <img className="h-[270px]" src={data.avatar_url} alt="" />
    
    
    </div>
  )
}

export default Github

// loader ka use karne ke liye 

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/RahulGurjar07')
    return response.json()
}


