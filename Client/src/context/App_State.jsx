import React, { useEffect } from 'react'
import { AppContext } from './App_Context'
import axios from 'axios'

const App_State = (props) => {
  const url="http://localhost:3000/api";
useEffect(() => {
  login('Farhan@gmail.com',"Farhan");
}, [])


  //login
  const login = async (gmail,password)=>{
    const api = await axios.post(`${url}/login`,{
      gmail,password},{
        headers:{
          "Content-Type":"application/json"
        },
        withCredentials:true
      })
      console.log("login data",api)
  }

  return (
    <AppContext.Provider value={{

    }}>{props.children}</AppContext.Provider>
  )
}

export default App_State