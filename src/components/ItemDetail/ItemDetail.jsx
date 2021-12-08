import React, {useContext} from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemDetail.css'
import { useHistory } from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'

const ItemDetail = ({detalle}) => {

  const [cantidad, setCantidad] =  React.useState(0)
  const [comprar, setComprar] = React.useState(false)

  const history = useHistory()

  const {addItem, agregarCantidad } = useContext(CartContext)

  const onAdd = (qty) => {
    setCantidad(qty)
    setComprar(true)
  }

  const handleComprar = () => {
    addItem(detalle, cantidad)
    agregarCantidad(cantidad)
    //history.push(`/cart`)
  }

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
              {
                comprar ? <button 
                  className="btn btn-info rounded-pill mt-5 px-5"         
                  onClick={handleComprar}
                >
                  Confirmar agregar al carrito
                </button> : <ItemCount onAdd={(qty) => onAdd(qty)} cantidad={cantidad} stock={detalle.stock} initial={1}/>
              }
              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
