import React, { Fragment, useEffect,useState } from 'react'
import {useParams} from 'react-router-dom'
const DetallesCategoria = () => {
    const id = useParams().id
    const[categoria,setcategoria] = useState([]) 
    const[producto,setproducto]= useState([])
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

          const listacat = await fetch(`https://kevarman20.herokuapp.com/v1/categorias/${id}`, requestOptions)
          const categorialis = await listacat.json()
          setcategoria(categorialis)

          const lista = await fetch(`https://kevarman20.herokuapp.com/v2/productos/`)
          const productolis = await lista.json()
          setproducto(productolis)

          } catch (error) {
            console.log('no tenemos categorias')
          }
    }
     
    console.log(producto)

    return (
        <Fragment>
          <div className="ListaCategoria">
            <h1> Productos del {categoria.descripcion}</h1>


            </div>
        </Fragment>
    )
}
export default DetallesCategoria
