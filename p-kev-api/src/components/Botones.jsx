import React, { Fragment } from 'react'
import {Link} from "react-router-dom";

const Botones =()=>{

    return (
        <Fragment>
            <div className="container mt-2">
                <div className="btn-group">
                <Link to="/AddUsuario" className="btn btn-dark">CreateUsuario</Link>
                <Link to="/Productos" className="btn btn-dark">Productos</Link>
                <Link to="/Categoria" className="btn btn-dark">Categorias</Link>
                </div>
            </div>
        </Fragment>

    );

}

export default Botones