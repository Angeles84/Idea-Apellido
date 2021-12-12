import React , {useEffect} from 'react'
import {useParams} from 'react-router'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import objetoMandalas from '../../store/productoMandalas.js'
import { collection, getDocs, query, where } from 'firebase/firestore/lite'
import { db } from '../../firebase/config'


const ItemListContainer = ({greeting}) => {

  const [mandalas, setMandalas] = React.useState([])
  const { categoryId } = useParams()

  useEffect(() => {

    const productosRef = collection(db, "mandalas")
    const q = categoryId ? query(productosRef, where('category', '==', categoryId)) : productosRef
    getDocs(q)
    .then((snapshot) => {
      const items = snapshot.docs.map((doc) => ({
              id: doc.id, 
              ...doc.data()
          })
      )
      setMandalas(items)
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
