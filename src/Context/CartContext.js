import React , {createContext} from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cart, setCart ] = React.useState([])

  const isInCart = (currentId) => {
    return cart.some(product => product.id === currentId)
  }

  const addItem = (item = { id: 1}) => {
    if(isInCart(item.id)){
      alert('El producto ya se encuentra en el carrito')
    } else {
      setCart([...cart, item])
    }
  }

  return (
    <CartContext.Provider value={{cart, addItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
