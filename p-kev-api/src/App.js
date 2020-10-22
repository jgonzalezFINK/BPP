import React from 'react'
import Login from './components/Login'
import Lista from './components/Lista'
import DetallesPro from './components/DetallesPro'
import {BrowserRouter as Router,
  Route,Switch
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
      <Switch>  
      <Route path="/" exact><Login/></Route>
      <Route path="/Productos" exact><Lista/></Route>
      <Route path="/Productos/:id" exact><DetallesPro/></Route>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
// 