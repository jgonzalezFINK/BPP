import React, { Fragment, useEffect } from 'react'
import {useParams} from 'react-router-dom'

const DetallePro = () =>{

    const {id} = useParams()
    const[producto,setproducto]= React.useState([]) 
    
    React.useEffect(()=>{
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
            <h1>Producto {JSON.stringify(id)}</h1>
            <h1>{producto.descripcion}</h1>
            <h1>Subcategoria: {producto.subcategoria}</h1>
        </Fragment>
    )
}

export default DetallePro