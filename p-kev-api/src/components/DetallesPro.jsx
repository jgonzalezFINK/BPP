import React, { Fragment, useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'

const DetallePro = () =>{
    const id = useParams().id
    const[producto,setproducto]= useState([]) 
    
    useEffect(()=>{
      obtenerDatos(id)
    },[id])      


    const obtenerDatos = async (id) =>{
        try {        
          const lista = await fetch(`https://kevarman20.herokuapp.com/v2/productos/${id}`)
          const productolis = await lista.json()
          setproducto(productolis)

        } catch (error) {
          console.log('no tenemos productos')
        }
      }

    return (
        <Fragment>
          <div className="informacion">
            <h1>{producto.descripcion}</h1>
            <label>Subcategoria: {producto.subcategoria}</label>
            <label>Fecha de registro: {producto.fecha_creado}</label>
            <label>Cantidad de producto: {producto.cantidadProducto}</label>
            </div>
        </Fragment>
    )
}

export default DetallePro