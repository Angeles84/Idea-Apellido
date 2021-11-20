import React , {useEffect} from 'react'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.css'
import abeja from '../../assets/img/abeja.jpg'
import arcoiris from '../../assets/img/arcoiris.jpg'
import azul from '../../assets/img/azul.jpg'
import calipso from '../../assets/img/calipso.jpg'
import chakras from '../../assets/img/chakras.jpg'
import cobre from '../../assets/img/cobre.jpg'
import florChakras from '../../assets/img/flor-chakras.jpg'
import florEntera from '../../assets/img/flor-entera.JPG'
import flor from '../../assets/img/flor.jpg'
import merkaba from '../../assets/img/merkaba.jpg'
import negra from '../../assets/img/negra.jpg'
import oro from '../../assets/img/oro.jpg'
import pasion from '../../assets/img/pasion.jpg'
import rosada from '../../assets/img/rosada.jpg'
import sicodelica from '../../assets/img/sicodelica.jpg'


const ItemListContainer = ({greeting}) => {

  const [mandalas, setMandalas] = React.useState([])

  const objetoMandalas = [
    { title: 'Abeja de la Luz', imagen: abeja, size: '20 x 20', price: 12000, stock: 3 , description: 'Acrílico sobre madera'},
    { title: 'Arcoíris', imagen: arcoiris, size: '20 x 20', price: 12000, stock: 4 , description: 'Acrílico sobre madera'},
    { title: 'Azul profundo', imagen: azul, size: '30 x 30', price: 15000, stock: 2 , description: 'Acrílico sobre tela'},
    { title: 'Calipso en flor', imagen: calipso, size: '20 x 20', price: 12000, stock: 1 , description: 'Acrílico sobre madera'},
    { title: 'Chakras', imagen: chakras, size: '20 x 20', price: 15000, stock: 2 , description: 'Acrílico sobre tela'},
    { title: 'Chakras en una flor', imagen: florChakras, size: '20 x 20', price: 13000, stock: 4 , description: 'Acrílico sobre madera'},
    { title: 'Gran Flor', imagen: florEntera, size: '40 x 40', price: 18000, stock: 2 , description: 'Acrílico sobre madera dividido en 4 partes de 20 x 20'},
    { title: 'Flor de la vida', imagen: flor, size: '20 x 20', price: 10000, stock: 5 , description: 'Acrílico sobre madera'},
    { title: 'Merkaba', imagen: merkaba, size: '20 x 20', price: 12000, stock: 3 , description: 'Acrílico sobre madera'},
    { title: 'Un pedacito de flor en negro', imagen: negra, size: '20 x 20', price: 10000, stock: 2 , description: 'Acrílico sobre madera'},
    { title: 'Un pedacito de flor en oro', imagen: oro, size: '20 x 20', price: 10000, stock: 2 , description: 'Acrílico sobre madera'},
    { title: 'Un pedacito de flor en cobre', imagen: cobre, size: '20 x 20', price: 10000, stock: 2 , description: 'Acrílico sobre madera'},
    { title: 'Flor rosa en movimiento', imagen: rosada, size: '30 x 30', price: 15000, stock: 1 , description: 'Acrílico sobre tela'},
    { title: 'Pasión en flor', imagen: pasion, size: '20 x 20', price: 12000, stock: 2 , description: 'Acrílico sobre madera'},
    { title: 'Sicodélica', imagen: sicodelica, size: '20 x 20', price: 12000, stock: 1 , description: 'Acrílico sobre madera'},
  ]

  const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve(objetoMandalas), 2000);
  });

  useEffect(() => {
    promesa.then(resp =>
      setMandalas(resp))
  }, [])

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
