import React from 'react'
import PropTypes from 'prop-types'
import './ItemCount.css'

const ItemCount = ({stock, initial}) => {
  
  const [counter , setCounter] = React.useState(initial)

  const onAdd = () => {
    setCounter(counter + 1)
  }
  
  const onSub = () => {
    setCounter(counter - 1)
  }

  return (
    <div className="card" >
      <div className="card-body">
        <h6 className="card-title mb-4">Nombre del producto</h6>
        <button
          className="mr-3 sub"
          onClick={onSub}
          disabled={counter === 1}
        >
          -
        </button>
        <span>{counter}</span>
        <button
          className="ml-3 add"
          onClick={onAdd}
          disabled={counter === stock}
        >
          +
        </button>
        <button 
          className="btn btn-info btn-block rounded-pill mt-3"
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
