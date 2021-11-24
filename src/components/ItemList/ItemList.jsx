import React from 'react'
import ItemCount from '../ItemCount/ItemCount'
import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({listmandalas}) => {
  return (
    <div className="row">
      {
        listmandalas.map( (mandala , index) => 
          <Item title={mandala.title} imagen={mandala.imagen} price={mandala.price} size={mandala.size} stock={mandala.stock} description={mandala.description} key={index}/>
        )
      }
      <div>
        <ItemCount stock={5} initial={1}/>
      </div>
    </div>
  )
}

export default ItemList
