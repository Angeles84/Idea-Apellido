import React from 'react'
import './App.css';

//import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import NavBar from './components/NavBar/NavBar.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* <ItemListContainer greeting="¡Descubre la magia de mis Mandalas!"/> */}
      <ItemDetailContainer /> 
    </div>
  );
}

export default App;
