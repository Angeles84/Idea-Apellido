import React from 'react'
import PropTypes from 'prop-types'
import './ItemCount.css'

const ItemCount = ({stock, initial , onAdd}) => {
  
  const [counter , setCounter] = React.useState(initial)

  const sumarUno = () => {
    if(counter < stock) {
      setCounter(counter + 1)
    }
  }
  
  const restarUno = () => {
    if(counter > initial) {
      setCounter(counter - 1)
    }
  }

  return (
    <div className="card card-contador" >
      <div className="card-body pl-0">
        <button
          className="mr-3 sub"
          onClick={restarUno}
          disabled={counter === initial}
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
      </div> 
      <div>
      <button 
        className="btn btn-info rounded-pill mt-4 px-5"
        onClick={() => onAdd(counter)}
      >
        Agregar al carrito
      </button> 
      </div>  
    </div>
  )
}

ItemCount.propTypes = {
  stock: PropTypes.number,
  initial: PropTypes.number,
  cantidad: PropTypes.number
}

export default ItemCount
