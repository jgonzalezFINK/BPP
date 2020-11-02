import React, { Fragment,} from 'react'
import { useForm } from 'react-hook-form'
import Botones from './Botones';
function NewProducto() {

   const onSubmit = (data, e) =>{
    
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Token 0aa8044172f9fc36b752ff629934240e3f30207f");
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify({
    "descripcion":data.descripcion,
    "fecha_creado":"2017-08-01T07:11:37.090335-05:00",
    "vendido":false,
    "subcategoria":3});

    var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
    };

    fetch("https://kevarman20.herokuapp.com/v2/productos/", requestOptions)
    .then(response => response.text())
    .then(result => console.log(result))
    .catch(error => console.log('error', error));


    e.target.reset()
    }

    const {register, errors, handleSubmit} = useForm();
    return(
        <Fragment>
             <Botones/>
             <h1> Add Producto  </h1>
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Descripcion</label>
                <input
                    name="descripcion"
                    className="form-control my-2 "
                    type="text"
                    ref={ register({required:{value:true,message:'descripcion Requerida'}})}
                />
            <p>{errors?.username?.message}</p>
            {/** falta esta parte */}
            <label>Vendido</label>
            <input
            ref={register({ required: 'This is required' })}
            name="example_1"
            value={true}
            type="checkbox"
           />
                <p>{errors?.password?.message}</p>
            <label>Subcategoria</label>
                <input 
                    name="Subcategoria"
                    className="form-control my-2 "
                    type="text"
                    ref={ register({required:{value:true,message:'Password Requerido'}})}
                />
            <p>{errors?.password?.message}</p>

            <button className="btn btn-primary">Add new user</button>
        </form>
        </Fragment>
    );
}

export default NewProducto
