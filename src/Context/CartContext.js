import React , {createContext} from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

  const [cart, setCart ] = React.useState([])
  const[cantidad, setCantidad] = React.useState(0)

  const agregarCantidad = (quantity)=> {
    setCantidad(cantidad + quantity)
  }

  const isInCart = (id) => {
    return cart.some( prod => prod.id === id )
  }

  const addItem = (item, quantity) => {
    if(isInCart(item.id)){
      alert('El producto ya se encuentra en el carrito')
    } else {
      setCart([...cart, {cantidad: quantity, ...item}])
    }
  }
  
  const totalProductosCarrito = () => {
    return cart.reduce((acc, prod) => acc + prod.cantidad, 0)
  }

  const totalCompra = () => {
    return cart.reduce((acc, prod) => acc + prod.price * prod.cantidad, 0)
  }

  const removerDelCarrito = (id) => {
    setCart( cart.filter(prod => prod.id !== id ) )
  }

  const vaciarCarrito = () => {
    setCart([])
  }

  return (
    <CartContext.Provider value={{cart, addItem, agregarCantidad, removerDelCarrito, vaciarCarrito, totalCompra, totalProductosCarrito}}>
      {children}
    </CartContext.Provider>
  )
}

export default CartContextProvider
