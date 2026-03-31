import React from 'react'
import axios from 'axios'

const App = () => {
  function getData() {
    console.log("Data aagya");
    
  }
  
  return (
    <div className='bg-black h-screen p-4 text-white'>
      <button onClick={getData}
      className='bg-green-600 active:scale-95 mb-3 px-5 py-2 rounded text-white'>Get Data</button>
    </div>
  )
}

export default App