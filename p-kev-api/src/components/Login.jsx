import React, { Fragment} from 'react'
import { useState } from 'react';
import { useForm } from 'react-hook-form'
import {Link, Redirect} from "react-router-dom";

import "../styles.css"
import Bienvenida from './Bienvenida';

const Login = () => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");  
    const [Bandera,setBandera]=useState(true)
    
    const onSubmit = (data, e) =>{
        var raw = JSON.stringify({"username":data.username,"password":data.password});
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
        obtenerDatos(requestOptions)
        e.target.reset()
    }    
    
    const obtenerDatos = async (requestOptions) =>{
        try {

            const data = await fetch("https://kevarman20.herokuapp.com/login/",requestOptions)
            let miToken = await data.json()
            
            if(miToken.error){
                alert(miToken.error)
            }else{
                localStorage.setItem("Token", JSON.stringify(miToken))
                 setBandera(false) 
            }
        } catch (error) {
            console.log(error)
        }

    }

    const{register,errors,handleSubmit} = useForm();

        return(
            <Fragment>
                { !Bandera ?
                    <Redirect to="/Bienvenida"> <Bienvenida/> </Redirect>
                
                :<>
                
                    <form className="Login" onSubmit={handleSubmit(onSubmit)}>
                        <h1>Login</h1>
                        <div>
                        <label className="text-center">Username</label>
                        <input
                        name="username"
                        className="form-control my-2 "
                        type="text"
                        ref={ register({
                             required:{value:true,message:'Username Requerido'}
                            })
                        }
                        />
                        <p>{errors?.username?.message}</p>
                        </div>
                        <div>
                        <label className="text-center" >Password</label>
                        <input
                        name="password"
                        className="form-control my-2 "
                        type="password"
                        ref={ register({
                             required:{value:true,message:'Password Requerido'}
                            })
                        }
                        />
                        <p>{errors?.password?.message}</p>
                        </div>
                        <div >
                        <Link to="/Usuario/AddUsuario" >Registrar Usuario</Link>
                        </div>
                        <button className="btn btn-primary">lOGIN</button>
                    </form>
                 </> }
                </Fragment>
            )
          
}

export default Login