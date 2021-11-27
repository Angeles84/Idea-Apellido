import React , {useEffect} from 'react'
import {useParams} from 'react-router'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import objetoMandalas from '../../store/productoMandalas.js'

const ItemListContainer = ({greeting}) => {

  const [mandalas, setMandalas] = React.useState([])
  const { categoryId } = useParams()

  const promesa = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(objetoMandalas)
      }, 2000)
    })
  }

  useEffect(() => {
    promesa(categoryId)
    .then(respMandala => {           
      if(!categoryId) {
        setMandalas(respMandala)
      }else {
        setMandalas(respMandala.filter(mandala => mandala.category === categoryId))
      }
    })
    .catch( error => console.log(error))

  }, [categoryId])

  return (
    <div className="container">
      <h2 className="greeting">{greeting}</h2>
      <div className="mt-5">
        <ItemList listmandalas={mandalas} />
      </div>
    </div>
  )
}

export default ItemListContainer
