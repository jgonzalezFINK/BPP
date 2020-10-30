import React, { Fragment, useEffect } from 'react'
import {useParams} from 'react-router-dom'

const DetallePro = () =>{
<<<<<<< HEAD
    const id =useParams().id
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

   

    return (
        <Fragment>
            <h2>{producto.descripcion}</h2>
            <label>Fecha de creacion: {producto. fecha_creado}</label>
=======

    const id = useParams()
    const[producto,setproducto]= React.useState([]) 
    
    React.useEffect(()=>{
      obtenerDatos(id)
      console.log(Object.values(id));
      console.log(id);
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
              for (var key in id) {
                var id_url = id[key];
                //console.log(key);
                //console.log(id[key]);
              }
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                const lista = await fetch(proxyurl + `https://kevarman20.herokuapp.com/v2/productos/${id_url}`, requestOptions)
                //const lista = await fetch(`https://kevarman20.herokuapp.com/v2/productos/${id_url}`, requestOptions)
                const productolis = await lista.json()
                setproducto(productolis)

              } catch (error) {
                console.log('no tenemos productos')
              }
      }

    return (
        <Fragment>
            <h1>{JSON.stringify(id)}</h1>
>>>>>>> 36dd587f6bb40aba2e6e88073ac143f8ab166fc0
        </Fragment>
    )
}

export default DetallePro