import React, { Fragment, useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
import Botones from './Botones';
function DetallesCategoria() {

    const {id} = useParams()
    const[categoria,setcategoria]= useState([]) 
    
    useEffect(()=>{
      obtenerDatos(id)
    },[id])      
    const obtenerDatos = async (id) =>{
      try {   
          var myHeaders = new Headers();
          myHeaders.append("Authorization", "Token 18e59323d194db38c608b4d2903443dd997a5588");
            
          var requestOptions = {
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
    return (
        <Fragment>
           <Botones/>
            <h1>Categoria: {categoria.id}</h1>
            <label>Descripcion: {categoria.descripcion}</label>
        </Fragment>
    )
}
export default DetallesCategoria
