import React from 'react'
import CartWidget from '../CartWidget/CartWidget.jsx';
import './NavBar.css';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg fixed-top px-3 px-sm-4 px-md-5">
      <a className="navbar-brand angie" href="#">Angie's Store</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon pt-1"><i className="fas fa-bars fa-1x"></i></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div className="navbar-nav ml-auto">
          <a className="nav-link ml-2" href="#">Productos</a>
          <a className="nav-link ml-2" href="#">Sobre mí</a>
          <a className="nav-link ml-2" href="#">Contacto</a>
          <a className="nav-link btn btn-info rounded-pill ml-3 px-3 contacto" href="#">Login</a>
          <CartWidget />
        </div>
      </div>
    </nav>
  )
}

export default NavBar
