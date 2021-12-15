import React , {useEffect} from 'react'
import {useParams} from 'react-router-dom'
import ItemDetail from '../ItemDetail/ItemDetail'
//import objetoMandalas from '../../store/productoMandalas.js'
import { db } from '../../firebase/config'
import { doc, getDoc } from 'firebase/firestore/lite'
import Loading from '../Loading/Loading'

const ItemDetailContainer = () => {

  const [detalle, setDetalle] = React.useState({})
  const [loading, setLoading] = React.useState(false);
  const {mandId} = useParams()

  useEffect(() => {
    setLoading(true)
    const docRef = doc(db, "mandalas", mandId)
    getDoc(docRef)
    .then((doc) => {
      setDetalle( {
        id: doc.id,
        ...doc.data()
      })
    })
    .finally(() => {
      setLoading(false)
    })
    .catch( error => console.log(error))
  }, [mandId])

  return (
    <div className='pt-3'>
      {
        loading ? <Loading /> : <ItemDetail detalle={detalle} />
      } 
    </div>
  )
}

export default ItemDetailContainer
