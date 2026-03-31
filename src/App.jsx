import React, { useState } from 'react'
import axios from 'axios'

const App = () => {
  const [UserData, setUserData] = useState([])
  
  
  const getData = async() => {
    const response = await axios.get('https://picsum.photos/v2/list?page=3&limit=30')
    setUserData(response.data)
    
  }
  
  let printUserData = 'No user available'
  if(UserData.length>0) {
    printUserData = UserData.map(function(elem, idx){
      return <div>
      <div className='h-40 w-44 bg-white'>
        <img className = 'h-full object-cover'src = {elem.download_url} alt = ''/>
      </div>
      <h2>{elem.author}</h2>
      </div>
    })
  }
  return (
    <div className='bg-black overflow-auto h-screen p-4 text-white'>
      <button onClick={getData}
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>Get Data
      </button>

      <div className='flex flex-wrap gap-4'>{printUserData}</div>
    </div>
  )
}

export default App