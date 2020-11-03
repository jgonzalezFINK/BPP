import React, { Fragment, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import Botones from './Botones';
const DetallePro = () =>{

    const {id} = useParams()
    const[producto,setproducto]= useState([]) 
    
    useEffect(()=>{
      obtenerDatos(id)
    },[id])      


    const obtenerDatos = async (id) =>{
        try {
          const lista = await fetch( `https://kevarman20.herokuapp.com/v2/productos/${id}`)
          const productolis = await lista.json()
          setproducto(productolis)
        } catch (error) {
          console.log('no tenemos productos')
        }
      }

    return (
        <Fragment>
           <Botones/>
           console.log({producto})
            <h1>{producto.descripcion}</h1>
            <label>Subcategoria: {producto.subcategoria}</label>
        </Fragment>
    )
}

export default DetallePro