import React, { Fragment } from 'react'
import Login  from './components/Login'
import Lista from './components/Lista'
import DetallesPro from './components/DetallesPro'
import AddUsuario from './components/AddUsuario'
import LisCategotia from'./components/categotia'
import NewProducto from'./components/NewProducto'
import DetallesCategoria from './components/DetallesCategoria'
import {BrowserRouter as Router,
  Route,Switch} from "react-router-dom";

function App() {
  return (
    <Fragment>
    <Router>
      <Switch>  
      <Route path="/" exact><Login/></Route>
      <Route path="/Productos" exact><Lista/></Route>
      <Route path="/Productos/:id" exact><DetallesPro/></Route>
      <Route path="/Categoria" exact><LisCategotia/></Route>
      <Route path="/Categoria/:id" exact><DetallesCategoria/></Route>
      <Route path="/AddUsuario" exact><AddUsuario/></Route>
      <Route path="/Newproductos" exact><NewProducto/></Route>
      </Switch>
    </Router>
    </Fragment>
  );
}

export default App;