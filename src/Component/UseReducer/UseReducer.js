import React,{useReducer,useContext} from 'react'
import Data from '../../Contex/Data';


const reduser =(state,action)=>{
    if(action.type == "value"){
        return{email:action.payload}
    }
}





function UseReducer() {
    
    const [state,dispatch]=useReducer(reduser,{email:''});
    console.log(state)

    const data=useContext(Data)

    const handelemail=(e)=>{
        
        dispatch({type:'value',payload:e.target.value})

    }
  return (
   <>
   <div className='text-center mt-5'>
       <h1>Use Reducer {data}</h1>
       <h3>Email:</h3>
        <input type="text" onChange={handelemail}></input>

   </div>
   </>
  )
}

export default UseReducer