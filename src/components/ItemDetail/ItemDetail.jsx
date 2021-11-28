import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'

const ItemDetail = ({detalle}) => {
  return (
    <div className="col-12 col-md-11 col-lg-10 col-xl-9 mx-auto mt-5 pt-5">
      <div className="card my-3 text-left">
        <div className="row no-gutters">
          <div className="col-md-5">
            <img className="img-fluid img-detalle" src={detalle.imagen} alt="..."/>
          </div>
          <div className="col-md-7">
            <div className="card-body">
              <h3 className="card-title mb-4 mt-lg-3"><span>Mandala:</span> {detalle.title}</h3>
              <p className="card-text"><b>Descripción:</b> {detalle.description}</p>
              <p className="card-text"><b>Tamaño:</b> {detalle.size}</p>
              <p className="card-text"><b>Precio:</b> ${detalle.price}</p>
              <p className="card-text"><small className="text-muted">Stock: {detalle.stock}</small></p>
              <ItemCount stock={detalle.stock} initial={1}/>
              <button className="btn btn-info rounded-pill mt-4 px-5">Agregar al carrito</button> 
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
