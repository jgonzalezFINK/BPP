import React, { Fragment,} from 'react'
import { useForm } from 'react-hook-form'
import {Link} from 'react-router-dom'; 
import "../styles.css"
const AddUsuario=()=>{

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const onSubmit = (data, e) =>{
        
        var formdata = new FormData();
        formdata.append("username", data.username);
        formdata.append("email", data.email);
        formdata.append("password", data.password);

        var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow'
        };

        fetch("https://kevarman20.herokuapp.com/crear/", requestOptions)
        .then(response => response.text())
        .then(result => console.log(result))
        .catch(error => console.log('error', error));
        
    }


    const {register, errors, handleSubmit} = useForm();
    return(
        <Fragment>
             
    <form className="Agregarusuario" onSubmit={handleSubmit(onSubmit)}>
        <h1> AddUsuario  </h1>
            <label>Username</label>
                <input
                    name="username"
                    className="form-control my-2 "
                    type="text"
                    ref={ register({required:{value:true,message:'Username Requerido'}})}
                />
            <p>{errors?.username?.message}</p>

            <label>Email</label>
                <input 
                    name="email"
                    className="form-control my-2 "
                    type="email"
                    ref={ register({required:{value:true,message:'email Requerido'}})}
                />
                <p>{errors?.password?.message}</p>
            <label>password</label>
                <input 
                    name="password"
                    className="form-control my-2 "
                    type="password"
                    ref={ register({required:{value:true,message:'Password Requerido'}})}
                />
            <p>{errors?.password?.message}</p>
            <button className="btn btn-primary" >Agregar</button>
            <Link to="/Bienvenida"><button className="btn btn-danger">Cancelar</button></Link>
            </form>
        </Fragment>
    );
    
}    

export default AddUsuario
