import React from 'react'
import PropTypes from 'prop-types'
import './Item.css'

const Item = ({ id, title, price, imagen, stock, size, description }) => {
  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card mb-4 text-left">
        <div className="card-body">
          <img className="img-fluid" src={imagen} alt="" />
          <h5 className="card-title mt-3"><b>{title}</b></h5>
          <p className="card-text mb-2"><b>Precio:</b> ${price.toLocaleString()}</p>
          <p className="card-text mb-2"><b>Stock:</b> {stock}</p>
          <p className="card-text mb-2"><b>Descripción:</b> {description} </p>
          <button className="btn btn-info btn-block rounded-pill mt-3">Ver detalle del producto</button> 
        </div>
      </div>
    </div>
  )
}

Item.propTypes = {

}

export default Item
