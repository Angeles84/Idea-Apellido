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

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/">
            <ItemListContainer greeting="¡Descubre la magia de mis Mandalas!"/>
          </Route>
          <Route exact path="/category/:categoryId">
            <ItemListContainer greeting="¡Descubre la magia de mis Mandalas!"/>
          </Route>
          <Route exact path="/item/:mandId">
            <ItemDetailContainer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
