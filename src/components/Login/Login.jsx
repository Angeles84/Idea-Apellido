import React from 'react'
import login from '../../assets/img/login-button.gif'
import './Login.css'

const Login = () => {
  return (
    <div className='container mt-5 pt-5 text-center'>
      <div>
        <img src={login} className="imagen-login" alt="cargando" />
        <h4 className='mt-5'>Aún no está habilitado el Login...</h4>
      </div>
    </div>
  )
}

export default Login
