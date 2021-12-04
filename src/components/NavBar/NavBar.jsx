import React , {useContext}from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx';
import {Link, NavLink} from 'react-router-dom'
import './NavBar.css';
import { CartContext } from '../../Context/CartContext'

const NavBar = ({id}) => {

  const {cart} = useContext(CartContext)

  return (
    <nav className="navbar navbar-expand-lg fixed-top px-3 px-sm-4 px-md-5">
      <Link className="navbar-brand angie" to="/">Angie's Store</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon pt-1"><i className="fas fa-bars fa-1x"></i></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <NavLink className="nav-link ml-2" to="/inicio" activeClassName="active">Productos</NavLink>
          <NavLink className="nav-link ml-2" to="/category/grande" activeClassName="active">Mandalas-Grandes</NavLink>
          <NavLink className="nav-link ml-2" to="/category/pequeña" activeClassName="active">Mandalas-Pequeñas</NavLink>
          <a className="nav-link btn btn-info rounded-pill ml-4 px-3 contacto" href="#">Login</a>
          <NavLink className="nav-link ml-5" to="/cart" activeClassName="active">
            <CartWidget /><span>{cart.length === 0 ? '' : cart.length}</span>
          </NavLink>   
        </div>
      </div>
    </nav>
  )
}

export default NavBar
