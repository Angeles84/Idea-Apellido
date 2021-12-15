import React from 'react'
import loading from '../../assets/img/loading.gif'
import './Loading.css'

const Loading = () => {
  return (
    <div className='mt-5 text-center'>
      <div>
        <img src={loading} className="imagen-loading" alt="cargando" />
      </div>
    </div>
  )
}

export default Loading
