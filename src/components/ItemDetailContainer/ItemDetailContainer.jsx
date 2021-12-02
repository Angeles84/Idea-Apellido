import React , {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import objetoMandalas from '../../store/productoMandalas.js'

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = React.useState({})
  const {mandId} = useParams()
  
  const promesa = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(objetoMandalas)
      }, 2000)
    })
  }

  useEffect(() => {
    promesa()
    .then(data => setDetalle(data.find(item => item.id === mandId)))
    .catch( error => console.log(error))
  }, [mandId])

  return (
    <div>
      { detalle !== undefined && <ItemDetail detalle={detalle} />}
    </div>
  )
}

export default ItemDetailContainer
