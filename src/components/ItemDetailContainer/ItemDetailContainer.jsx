import React , {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
import objetoMandalas from '../../store/productoMandalas.js'
import { db } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore/lite'

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = React.useState({})
  const {mandId} = useParams()

  useEffect(() => {
    
    const docRef = doc(db, "mandalas", mandId)
    getDoc(docRef)
    .then((doc) => {
      setDetalle( {
        id: doc.id,
        ...doc.data()
      })
    })
    .catch( error => console.log(error))
  }, [mandId])

  return (
    <div>
      { detalle !== undefined && <ItemDetail detalle={detalle} />}
    </div>
  )
}

export default ItemDetailContainer
