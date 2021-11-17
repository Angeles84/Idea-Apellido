import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemListContainer.css'

const ItemListContainer = ({greeting}) => {
  return (
    <div className="container">
      <h2 className="greeting">{greeting}</h2>
      <div className="d-flex justify-content-center mt-5">
        <ItemCount stock={5} initial={1}/>
      </div>
    </div>
  )
}

export default ItemListContainer
