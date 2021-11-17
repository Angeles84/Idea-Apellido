import React from 'react'
import PropTypes from 'prop-types'
import './ItemCount.css'

const ItemCount = ({stock, initial }) => {
  
  const [counter , setCounter] = React.useState(initial)

  const sumarUno = () => {
    setCounter(counter + 1)
  }
  
  const restarUno = () => {
    setCounter(counter - 1)
  }
  
  const onAdd = () => {
    console.log('Agregar al carrito')
  }

  return (
    <div className="card" >
      <div className="card-body">
        <h6 className="card-title mb-4">Nombre del producto</h6>
        <button
          className="mr-3 sub"
          onClick={restarUno}
          disabled={counter === 1}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          className="ml-3 add"
          onClick={sumarUno}
          disabled={counter === stock}
        >
          +
        </button>
        <button 
          className="btn btn-info btn-block rounded-pill mt-3"
          onClick={onAdd}
        >
          Agregar
        </button>
      </div>   
    </div>
  )
}

ItemCount.propTypes = {
  stock: PropTypes.number,
  initial: PropTypes.number,
}

export default ItemCount
