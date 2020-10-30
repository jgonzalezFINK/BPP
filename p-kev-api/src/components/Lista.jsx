import React, { Fragment } from 'react'
import { Link } from 'react-router-dom';
import "../styles.css"

const Lista = () =>{

    const[productos,setproductos]= React.useState([]) 
    
    React.useEffect(()=>{
      const obtenerDatos = async () =>{
        try {
              var myHeaders = new Headers();
              myHeaders.append("Authorization", "Token 18e59323d194db38c608b4d2903443dd997a5588");
              
              var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
              };
  
                const lista = await fetch("https://kevarman20.herokuapp.com/v2/productos/", requestOptions)
                const productolis = await lista.json()
                setproductos(productolis)
              
              } catch (error) {
                console.log('no tenemos productos')
              }
      }
      obtenerDatos()
    },[])      

    return(
        <Fragment>
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
          <Link href="" to={`/Newproductos/`} className="btn btn-dark">AddProduc</Link>
        </Fragment>
    )

}

export default Lista 