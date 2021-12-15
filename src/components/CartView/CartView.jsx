import React, { useContext }  from 'react'
import './CartView.css'
import { CartContext } from '../../Context/CartContext'
import CartItem from '../CartItem/CartItem'
import { NavLink , Link} from 'react-router-dom'

const CartView = () => {

  const {vaciarCarrito, cart, totalCompra} = useContext(CartContext)

  if (cart.length === 0) {
    return <div className="container pt-5">
              <h2 className="mt-5 pt-5">No agregaste mandalas al carrito aún</h2>
              <hr/>
              <NavLink to="/" className="btn btn-info rounded-pill px-4">Volver</NavLink>
          </div>
  }

  const purchase = () => {
    alert('¡Gracias por tu compra!')
  }

  return (
    <div className="container py-5">
      <h2 className="mt-5 pt-4 mb-3">Carrito de compras</h2>
      <div className="">
        {
            cart.map(item => <CartItem key={item.id} {...item}/>)
        }
    </div>
    <div className="">
      <p>Valor total de compra: <b><span className="h3">${totalCompra().toLocaleString()}</span></b></p>
    </div>
      <hr/>
    <div className="container mt-4">
        <button className="btn btn-danger rounded-pill" onClick={vaciarCarrito}>Vaciar carrito</button>
        <Link to="/checkout" className="btn btn-info rounded-pill mx-2" onClick={purchase}>Terminar mi compra</Link>
    </div>
    </div>
  )
}

export default CartView
