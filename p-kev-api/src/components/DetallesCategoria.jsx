import React, { Fragment, useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import Botones from './Botones';
function DetallesCategoria() {

    const id = useParams().id
    const[categoria,setcategoria]= useState([]) 
    
    useEffect(()=>{
      const obtenerDatos = async (id) =>{
        try {   
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Token 18e59323d194db38c608b4d2903443dd997a5588");
              
            var requestOptions = {
              mode :'no-cors',
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
            
            const lista = await fetch(`https://kevarman20.herokuapp.com/v2/categorias/${id}`, requestOptions)
            const categorialis = await lista.json()
            setcategoria(categorialis)
            } catch (error) {
              console.log(error)
            }
      } 
      obtenerDatos(id)
    },[id])      

    return (
        <Fragment>
           <Botones/>
            <h1>{categoria.id}</h1>
            <label>{categoria.descripcion}</label>
        </Fragment>
    )
}
export default DetallesCategoria
