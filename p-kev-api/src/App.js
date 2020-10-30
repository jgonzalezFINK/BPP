import React from 'react'
import Login  from './components/Login'
import Lista from './components/Lista'
import DetallesPro from './components/DetallesPro'
<<<<<<< HEAD
import AddUsuario from './components/AddUsuario'
=======
import AddUsuario from  './components/AddUsuario'
>>>>>>> 36dd587f6bb40aba2e6e88073ac143f8ab166fc0
import {BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>  
      <Route path="/" exact><Login/></Route>
      <Route path="/Productos" exact><Lista /></Route>
      <Route path="/Productos/:id" exact><DetallesPro/></Route>
      <Route path="/AddUsuario" exact><AddUsuario/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;