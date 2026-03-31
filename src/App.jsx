import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Cards from './components/Cards'

const App = () => {
  const [UserData, setUserData] = useState([])
  const [Index, setIndex] = useState(1)
  
  
  const getData = async() => {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${Index}&limit=21`)
    setUserData(response.data)
  }

  useEffect(function() {
    getData()
  }, [Index])  

  let printUserData = <h3 className='text-gray-300 text-xs absolute font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>Loading...</h3>
  if(UserData.length>0) {
    printUserData = UserData.map(function(elem, idx){
      return <div key = {idx}>
        <Cards elem = {elem} />
      </div>
    })
  }
  
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <div className='flex flex-wrap gap-4'>{printUserData}</div>
      <div className='flex justify-center items-center gap-6 p-4'>
        <button className='bg-amber-400 text-sm text-black cursor-pointer active:scale-95 rounded px-4 py-2 font-semibold'
        onClick={() => {
          if(Index>1)
            {setIndex(Index-1)
             setUserData([])
            }
        }}>Prev</button>
        <h4>Page {Index}</h4>
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