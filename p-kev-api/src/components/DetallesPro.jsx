import React, { Fragment } from 'react'
import {useParams} from 'react-router-dom'

const DetallePro = () =>{

    const id = useParams()
    const[producto,setproducto]= React.useState([]) 
    
    React.useEffect(()=>{
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
              
                const lista = await fetch(`https://kevarman20.herokuapp.com/v2/productos/${id}`, requestOptions)
                const productolis = await lista.json()
                setproducto(productolis)

              } catch (error) {
                console.log('no tenemos productos')
              }
      }

    return (
        <Fragment>
            <h1>Hola :D</h1>
        </Fragment>
    )
}

export default DetallePro