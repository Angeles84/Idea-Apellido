import React, { useContext } from 'react'
import { CartContext } from '../../Context/CartContext'
import { collection, addDoc , Timestamp } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'
import {Link} from 'react-router-dom'


const Checkout = () => {

  const {cart, totalCompra , vaciarCarrito} = useContext(CartContext)
  const [orderId , setOrderId] = React.useState(null)

  const [values , setValues] = React.useState({
    nombre: "",
    email: "",
    tel: ""
  })

  const handleInputChange = (e) => {
     setValues({
       ...values,
       [e.target.name]: e.target.value
     })
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()

    if(values.nombre === "") {
      alert("El nombre es requerido")
      return
    }
    if(values.email === "") {
      alert("El email es requerido")
      return
    }
    if(values.tel === "") {
      alert("El teléfono es requerido")
      return
    }
    const order = {
      buyer: values,
      items: cart,
      total: totalCompra(), 
      date: Timestamp.fromDate( new Date() )
    }
    const orderRef = collection(db , "orders")
    console.log(cart)
    addDoc(orderRef , order)
    .then((resp) => {
      setOrderId(resp.id)
      vaciarCarrito()
    })
    
  }

  return (
    <div className="container pt-5 text-left">

      {
        orderId 
        ? <>
            <h2 className='mt-5 pt-5'>¡Tu compra fue registrada con éxito!</h2>
            <hr />
            <p>Tu número de orden es: <b>{orderId}</b></p>
            <Link to="/" className="btn btn-info rounded-pill px-5 mt-4">Volver</Link>
          </> 
        : <> 
            <h1 className='mt-5 pt-3'>Checkout</h1>
            <hr />
            <form onSubmit={handleSubmit}>
              <input 
                name="nombre"
                type="text" 
                className='form-control my-2'
                placeholder='Nombre'
                value={values.nombre}
                onChange={handleInputChange}
              />
              <input 
                name="email"
                type="email" 
                className='form-control my-2'
                placeholder='Email'
                value={values.email}
                onChange={handleInputChange}
              />
              <input 
                name="tel"
                type="tel" 
                className='form-control my-2'
                placeholder='Teléfono'
                value={values.tel}
                onChange={handleInputChange}
              />
              <button type='submit' className="btn btn-info rounded-pill mt-3 px-5">Enviar</button>
            </form>
          </>
      }
      

    </div>
  )
}

export default Checkout
