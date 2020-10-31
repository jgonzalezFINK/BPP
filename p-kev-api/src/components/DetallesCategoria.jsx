import React, { Fragment } from 'react'
import {useParams} from 'react-router-dom'

function DetallesCategoria() {

    const id = useParams().id
    const[categoria,setcategoria]= React.useState([]) 
    
    React.useEffect(()=>{
      obtenerDatos(id)
    },[id])      

    const obtenerDatos = async (id) =>{
        try {
              
               
                const lista = await fetch(`https://kevarman20.herokuapp.com/v1/categorias/${id}`)
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
