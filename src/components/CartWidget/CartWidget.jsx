import React from 'react'
import './CartWidget.css'

import { MdShoppingCart } from "react-icons/md";

const CartWidget = () => {
  return (
    <a className="nav-link ml-5" href="#"><MdShoppingCart size='25px'/></a>
  )
}

export default CartWidget
