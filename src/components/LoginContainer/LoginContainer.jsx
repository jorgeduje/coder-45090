
import React from 'react'
import Login from '../Login/Login'

const LoginContainer = () => {

    const nombre = "pepito"

    const onSubmit = ()=>{
        console.log( "se envio el formulario ")
    }


  return (
    <div>
        <Login nombre={nombre} onSubmit={onSubmit} />
    </div>
  )
}

export default LoginContainer