import React, { Fragment, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
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
            <h1>{producto.descripcion}</h1>
            <label>Subcategoria: {producto.subcategoria}</label>
            <label>{producto.fecha_creado}</label>
        </Fragment>
    )
}

export default DetallePro