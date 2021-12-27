import React from 'react'
import { useContext } from 'react';
import { UserContext } from "../../Context/UserContext";
import login from '../../assets/img/login-button.gif'
import welcome from '../../assets/img/welcome.gif'

import './Login.css'

const Login = () => {

  const {googleAuth} = useContext(UserContext)
  const {logged} = useContext(UserContext);

  return (
    <div className='container mt-5 pt-4 text-center'>
      <div>      
        {
          logged ?
            <div className='mt-5'>
              <img src={welcome} className="imagen-welcome" alt="cargando" /><br />
              <h3 className='mt-3'>¡Gracias por ingresar!</h3>
              <p>Ahora recibirás promociones y mucho más!</p>
            </div>
          :
          <div className='mt-4'>
            <img src={login} className="imagen-login mb-5" alt="cargando" /><br />
            <span className='span-ingresa'>Ingresa fácilmente con </span>
            <button className='btn btn-primary px-4 ml-2' onClick={googleAuth}>Google</button><br />
            <p className='mt-3'>¡Haz Login para ser el primero en recibir novedades y descuentos!</p>
          </div>
        }
        
      </div>
    </div>
  )
}

export default Login
