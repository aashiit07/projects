import { useContext } from "react";
import React from 'react'
import { useState } from "react";
import UserContext from "../context/Usercontext";

function Login()
{
    const [username,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const {setUser} =useContext(UserContext)

    const handleSubmit=(e)=>{
        e.preventDefault()
        setUser({username,password})
    }

    return (
        <div>
        <h2>Login Page</h2>
        <input type="text"
        value={username}
        onChange={(e)=>setUserName(e.target.value)}
        placeholder=" enter username"/>
        {" "}
        <input type="text"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        placeholder="enter password"/>
        <button onClick={handleSubmit} >Submit</button>
        </div>
    )

}
export default Login