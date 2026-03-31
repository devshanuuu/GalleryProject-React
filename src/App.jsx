import React, { useEffect, useState } from 'react'
import axios from 'axios'

const App = () => {
  const [UserData, setUserData] = useState([])
  const [Index, setIndex] = useState(1)
  
  
  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=14`)
    setUserData(response.data)
  }

  useEffect(function() {
    getData()
  }, [Index])  

  let printUserData = <h3 className='text-gray-300 text-xs absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if(UserData.length>0) {
    printUserData = UserData.map(function(elem, idx){
      return <div key = {idx}>
      <a href = {elem.url}>
      <div className='h-40 w-44 overflow-hidden'>
        <img className = 'h-full w-full object-cover'src = {elem.download_url} alt = ''/>
      </div>
      <h2 className='font-bold text-lg'>{elem.author}</h2>
      </a>
      </div>
    })
  }
  
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <h1 className='text-6xl'>{Index}</h1>
      <div className='flex flex-wrap gap-4'>{printUserData}</div>
      <div className='flex justify-center items-center gap-6 p-4'>
        <button className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
        onClick={() => {
          if(Index>1)
            {setIndex(Index-1)
             setUserData([])
            }
        }}>Prev</button>
        <button className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
        onClick={() => {
          setIndex(Index+1)
          setUserData([])
        }}>Next</button>      

      </div>
    </div>
  )
}

export default App