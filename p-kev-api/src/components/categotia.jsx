import React, { Fragment,useEffect,useState }from 'react';
import { Link } from 'react-router-dom';
import "../styles.css"

const LisCategotia = () => {

    const[categoria,setCategoria]= useState([]) 
    
    useEffect(()=>{
      const obtenerDatos = async () =>{
        try {
              var myHeaders = new Headers();
              myHeaders.append("Authorization", "Token 18e59323d194db38c608b4d2903443dd997a5588");
              
              var requestOptions = {
                method: 'GET',
                headers: myHeaders,
                redirect: 'follow'
              };
  
                const lista = await fetch("https://kevarman20.herokuapp.com/v1/categorias/", requestOptions)
                const categorialist = await lista.json()
                setCategoria(categorialist)
              
              } catch (error) {
                console.log('Sin categorias')
              }
      }
      obtenerDatos()
    },[])      


    return (
        <Fragment>
        <h1>Categorias</h1>
      <ul>
        {
         categoria.map(item =>(
          <li key={item.id} >
            <Link to={`/Categoria/${item.id}`}>
            {item.descripcion}
            </Link>
          </li>
        ))
        }
      </ul>
    </Fragment>
    );
};

export default LisCategotia;