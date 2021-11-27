import React from 'react'

import './ItemList.css'
import Item from '../Item/Item'

const ItemList = ({listmandalas}) => {
  return (
    <div className="row">
      {
        listmandalas.map( (mandala) => 
          <Item mandala={mandala} key={mandala.id}/>
        )
      }
    </div>
  )
}

export default ItemList
