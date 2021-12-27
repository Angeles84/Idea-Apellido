import React, { useContext } from 'react'
import './CartItem.css'
import { CartContext } from '../../Context/CartContext'

const CartItem = ({ title, price, imagen, cantidad, id }) => {

    const { removerDelCarrito } = useContext(CartContext)

    return (
        <div className="container">
          <div className="card mb-3">
            <div className="row ">
              <div className="col-12 col-md-3 text-left pr-lg-5">
                <img src={imagen} alt={title}/>
              </div>
              <div className="col-12 col-md-9 pl-4 pr-0">
                <div className="card-body pr-0 pt-md-0 pt-xl-4">
                  <div className="row">
                    <div className="col-md-6 col-lg-4 pt-md-4 pl-0 text-md-left">
                      <h4 className="card-title"><span>Mandala: </span>{title}</h4>
                      <p className="card-text"><b>Precio:</b> ${price.toLocaleString()}</p>
                      <p className="card-text"><b>Cantidad:</b> {cantidad}</p>
                    </div>
                    <div className="col-md-6 col-lg-4 pt-3 pt-md-5">
                      <p className="card-text"><b>Total: </b>${(price * cantidad).toLocaleString()}</p>
                    </div>
                    <div className="col-md-6 col-lg-4 pt-md-5 pr-md-0">
                      <button
                        className="btn btn-sm rounded-pill btn-danger mt-3 mt-md-0"
                        onClick={() => { removerDelCarrito(id) }}
                      >
                          Eliminar
                      </button>
                    </div>
                  </div>          
                </div>        
              </div>
            </div>
          </div>
        </div>


    )

}

export default CartItem
