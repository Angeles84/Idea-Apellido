import React from 'react'
import PropTypes from 'prop-types'
import './ItemDetail.css'

const ItemDetail = ({cardDetalle}) => {
  return (
    <div className="col-12 col-md-8 mx-auto mt-5 pt-5">
      <div className="card my-3 text-left" >
        <div className="row no-gutters">
          <div className="col-md-5">
            <img className="img-fluid" src={cardDetalle.imagen} alt="..."/>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title mb-5">{cardDetalle.title}</h3>
              <p className="card-text"><b>Descripción:</b> {cardDetalle.description}</p>
              <p className="card-text"><b>Tamaño:</b> {cardDetalle.size}</p>
              <p className="card-text"><b>Precio:</b> ${cardDetalle.price}</p>
              <p className="card-text"><small className="text-muted">Stock: {cardDetalle.stock}</small></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

ItemDetail.propTypes = {

}

export default ItemDetail
