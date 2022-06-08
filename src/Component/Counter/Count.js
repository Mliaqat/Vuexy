import React, { useState } from 'react'
import Child from './Child'

function Count() {
    const [count,setcount]=useState(1)


    const handlecount=()=>{
        setcount(
           (count)=>(++count)
        )
    }

  return (
    <div className='container'>
    <button onClick={handlecount}>ADD</button>
    <p>{count}</p>
    <Child />
    </div>
  )
}

export default Count