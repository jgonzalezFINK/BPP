import React, { Fragment, useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
function DetallesCategoria() {

    const id = useParams().id
    const[categoria,setcategoria]= useState([]) 
    
    useEffect(()=>{
      const obtenerDatos = async (id) =>{
        try {   
            var myHeaders = new Headers();
            myHeaders.append("Authorization", "Token 18e59323d194db38c608b4d2903443dd997a5588");
              
            var requestOptions = {
              method: 'GET',
              headers: myHeaders,
              redirect: 'follow'
            };
            
            const lista = await fetch(`https://kevarman20.herokuapp.com/v1/categorias/${id}`, requestOptions)
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
            <h1>{categoria.id}</h1>
            <label>{categoria.descripcion}</label>
        </Fragment>
    )
}
export default DetallesCategoria
