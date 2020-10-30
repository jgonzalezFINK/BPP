import React, { Fragment } from 'react'
import {useParams} from 'react-router-dom'

function DetallesCategoria() {

    const {id} = useParams()
    const[categoria,setcategoria]= React.useState([]) 
    
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
              for (var key in id) {
                var id_url = id[key];
              }
                const proxyurl = "https://cors-anywhere.herokuapp.com/";
                const lista = await fetch(proxyurl + `https://kevarman20.herokuapp.com/v1/categorias/${id_url}`, requestOptions)
                //const lista = await fetch(`https://kevarman20.herokuapp.com/v2/categorias/${id_url}`, requestOptions)
                const categorialis = await lista.json()
                setcategoria(categorialis)

              } catch (error) {
                console.log('no tenemos categorias')
              }
      }

    return (
        <Fragment>
            <h1>categoria {JSON.stringify(id)}</h1>
            <h1>{categoria.descripcion}</h1>
        </Fragment>
    )
}
export default DetallesCategoria
