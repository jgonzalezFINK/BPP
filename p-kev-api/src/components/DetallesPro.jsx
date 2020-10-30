import React, { Fragment, useEffect } from 'react'
import {useParams} from 'react-router-dom'

const DetallePro = () =>{

    const id = useParams().id
    const[producto,setproducto]= React.useState([])

    useEffect(()=>{
      const obtenerDatos = async () =>{
        try {        
           let productos = await fetch(`https://kevarman20.herokuapp.com/v2/productos/${id}`)
           setproducto(await productos.json())
          } catch (error) {
          console.log('no hay producto')
        }
       
      }
      obtenerDatos();
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
            <h2>{producto.descripcion}</h2>
            <label>Fecha de creacion: {producto. fecha_creado}</label>
          </Fragment>
      )

}

export default DetallePro