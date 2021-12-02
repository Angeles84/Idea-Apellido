import React from 'react'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import NavBar from './components/NavBar/NavBar.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Cart from './components/Cart/Cart';

function App() {
  return (
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
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
