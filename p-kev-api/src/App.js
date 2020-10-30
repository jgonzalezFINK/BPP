import React from 'react'
import Login  from './components/Login'
import Lista from './components/Lista'
import DetallesPro from './components/DetallesPro'
import AddUsuario from './components/AddUsuario'

import {BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="container mt-2">
      <div className="btn-group">
      <Link to="/" className="btn btn-dark">Login </Link>
      <Link to="/AddUsuario" className="btn btn-dark">CreateUsuario</Link>
      <Link to="/Productos" className="btn btn-dark">Productos </Link>
      <Link to="/Categoria" className="btn btn-dark">Categorias</Link>
      </div>

      <Switch>  
      <Route path="/" exact><Login/></Route>
      <Route path="/Productos" exact><Lista /></Route>
      <Route path="/Productos/:id" exact><DetallesPro/></Route>
      <Route path="/AddUsuario" exact><AddUsuario/></Route>
      <Route path="/Categoria" exact><LisCategotia/></Route>
      <Route path="/Categoria/:id" exact><DetallesCategoria/></Route>
      <Route path="/Newproductos" exact><NewProducto/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;