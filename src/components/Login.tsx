import React from 'react'
import Input from './Input'
import './Login.css'

function Login() {
  return (
    <div className="split left">
        <div className="centeredtwo">
            Enter Card Number:
            <br></br>
            <Input/>
            <br></br>
            <br></br>
            Enter PIN:
            <br></br>
            <Input/>
        </div>
    </div>
  )
}

export default Login