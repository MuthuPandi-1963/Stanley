import React from 'react'
import {useNavigate} from 'react-router-dom'
const Login = () => {
    const navi = useNavigate()
    function handleClick(){
        navi("/")
    }
  return (
    <>
    <div>
        <input type="text" name="" id="" placeholder='username' />
        <input type="text" name="" id="" placeholder='email' />
        <input type="text" name="" id="" placeholder='password' />
        <button onClick={handleClick}>Login</button>
    </div>
    </>

  )
}

export default Login