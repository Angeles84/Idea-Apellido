import React , {createContext} from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cart, setCart ] = React.useState([])
  
  const addItem = (item) => {
    setCart([...cart, item])
  }

  return (
    <CartContext.Provider value={{cart, addItem}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider