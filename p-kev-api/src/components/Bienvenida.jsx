import React, { Fragment } from 'react';
import {Link} from "react-router-dom";
import "../styles.css"
const Bienvenida =()=>{

    return(
        <Fragment>
           <div className="botones">
            <h2>Bienvenido</h2>
            <div className="card-deck">
                <div className="card bg-primary">
                <div className="card-body text-center">
                <Link className="btn btn-primary" to="/Usuario/AddUsuario">USUARIOS</Link>
                </div>
                </div>
                <div className="card bg-primary">
                <div className="card-body text-center">
                <Link className="btn btn-primary" to="/Categoria"> CATEGORIAS</Link>
                </div>
                </div>
                <div className="card bg-primary">
                <div className="card-body text-center">
                <Link className="btn btn-primary" to="/Productos">PRODUCTOS</Link>
                </div>
                </div>
            </div>
            </div>
        </Fragment>
    )
}

export default Bienvenida;