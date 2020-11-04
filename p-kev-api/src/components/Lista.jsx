import React, { Fragment, useEffect,useState} from 'react'
import {Link} from 'react-router-dom';
import "../styles.css"

const Lista = () =>{
    
    const Token= localStorage.getItem("Token")
    const[productos,setproductos]= useState([]) 
    
    useEffect(()=>{
      const obtenerDatos = async () =>{
        try {
                const lista = await fetch("https://kevarman20.herokuapp.com/v2/productos/")
                const productolis = await lista.json()
                setproductos(productolis)
              
              } catch (error) {
                console.log('no tenemos productos')
              }
      }
      obtenerDatos()
    },[Token])      

    return(
        <Fragment>
         <div className="ListaCategoria">
            <h1>Productos</h1>
              <ul>
                {
                productos.map(item =>(
                  <li key={item.id} >
                    <Link to={`/Productos/${item.id}`}>
                    {item.descripcion}
                    </Link>
                  </li>
                ))
                }
              </ul>
              <div className="BtnBasic">
              <Link to="/Newproductos"><button className="btn btn-primary" >Agregar Producto</button></Link>   
              <Link to="/Bienvenida"><button className="btn btn-danger">Inicio</button></Link>
              </div>  
          </div>    
                
        </Fragment>
    )

}

export default Lista 