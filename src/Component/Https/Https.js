import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import '../Login/Login.css'

function Https() {

    const [name,setName]=useState('')
    const [role,setRole]=useState('')
    const [data,setdata]=useState([])
    const loadedMovies = [];
    const url="https://https-89462-default-rtdb.firebaseio.com/data.json"

//     useEffect(()=>{
//    getdata()
//     },[])

//     const getdata=()=>{
//     axios.get(url).then((res)=>{
//     console.log(res.data)
//       for (const key in data) {
//        loadedMovies.push({
//          id: key,
//          name: data[key].name,
//          role: data[key].role
//        });
       
       
//     }
//     setdata(loadedMovies)
//        console.log(data)
//  }).catch((error)=>{
//      console.log(error)
//  })
        

//     }

const [movies, setMovies] = useState([]);
const [isLoading, setIsLoading] = useState(false);
const [error, setError] = useState(null);
const fetchMoviesHandler = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Something went wrong!');
      }

      const data = await response.json();
      console.log(data)

      const loadedMovies = [];

      for (const key in data) {
        loadedMovies.push({
          id: key,
          name: data[key].name,
          role: data[key].role,
        });
      }

      setMovies(loadedMovies);
      console.log(movies)
    } catch (error) {
      setError(error.message);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    fetchMoviesHandler();
  }, [fetchMoviesHandler]);

    const postdata={
        name:name,
        role:role
    }



const postapi=(event)=>{
    event.preventDefault()
    axios.post(url,postdata).then(
        (res)=>{
            // console.log(res)
            // getdata()
        }
    ).catch((error)=>{
        // console.log(error)
    })

    }


  return (
    
    <div>
        <h1 className='text-center my-3'>From</h1>
        <div className="login">
    
      <input type="text" placeholder="Enter Name" onChange={(e)=>setName(e.target.value)}/>
      <input type="text" placeholder="Enter Role" onChange={(e)=>setRole(e.target.value)} />
      <button onClick={postapi}>Registered</button>
    
  </div>

  <div className='w-50 mx-auto'>
      {

movies.map((data,index)=>{
              return(
                  <div key={index}>
                  <h3>Name:{data.name}</h3>
                  <h3>Role:{data.role}</h3>
                  </div>
              )
          })
      }

  </div>

    </div>
  )
}

export default Https;