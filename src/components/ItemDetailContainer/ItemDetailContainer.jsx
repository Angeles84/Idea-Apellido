import React , {useEffect} from 'react'
import ItemDetail from '../ItemDetail/ItemDetail'
import florChakras from '../../assets/img/flor-chakras.jpg'

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = React.useState({})

  const objetoDetalle = { 
    title: 'Abeja de la Luz', 
    imagen: florChakras, 
    size: '20 x 20 cm', 
    price: 12000, 
    stock: 3 , 
    description: 'Mandala en acrílico sobre madera de 3 milímetros de grosor.'
  }
  
  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(objetoDetalle), 2000);
  });

  useEffect(() => {
    promesa.then(resp =>
      setDetalle(resp))
      console.log(detalle)
  }, [])

  return (
    <div>
      <ItemDetail cardDetalle={detalle} />
    </div>
  )
}


export default ItemDetailContainer
