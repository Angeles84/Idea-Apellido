import React from 'react'
import { useHistory } from 'react-router-dom'
import './Item.css'

const Item = ({ mandala }) => {

  const history = useHistory()

  return (
    <div className="col-12 col-md-6 col-lg-4">
      <div className="card mb-4 text-left">
        <div className="card-body">
          <img className="img-fluid" src={mandala.imagen} alt="" />
          <h5 className="card-title mt-3"><span>Mandala:</span> {mandala.title}</h5>
          <p className="card-text mb-2"><b>Precio:</b> ${mandala.price.toLocaleString()}</p>
          {/* <p className="card-text mb-2"><b>Stock:</b> {stock}</p>
          <p className="card-text mb-2"><b>Descripción:</b> {description} </p> */}
          <button 
            className="btn btn-info btn-block rounded-pill mt-3" 
            onClick={() => history.push(`/item/${mandala.id}`)}
          >
            Ver detalle del producto
          </button> 
        </div>
      </div>
    </div>
  )
}

export default Item
