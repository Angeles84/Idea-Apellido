import React from 'react'
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import CartView from './components/CartView/CartView';
import CartContextProvider from './Context/CartContext';
import Checkout from './components/Checkout/Checkout';
import Login from './components/Login/Login';

function App() {
  return (
    <CartContextProvider>
      <Router>
        <div className="App">
          <NavBar />

          <Switch>
            <Route exact path="/">
              <ItemListContainer greeting="¡Descubre la magia de mis Mandalas!"/>
            </Route>
            <Route exact path="/inicio">
              <ItemListContainer greeting="¡Descubre la magia de mis Mandalas!"/>
            </Route>
            <Route exact path="/category/:categoryId">
              <ItemListContainer greeting="¡Descubre la magia de mis Mandalas!"/>
            </Route>
            <Route exact path="/item/:mandId">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/cart">
              <CartView />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </Switch>
        </div>
      </Router>
    </CartContextProvider>
  );
}

export default App;
