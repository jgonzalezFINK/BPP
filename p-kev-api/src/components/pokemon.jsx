import React, { Fragment, useState } from 'react'
import { useForm } from 'react-hook-form'

import "../styles.css"

const Pokemon = () => {

    const[datos,setdatos]= useState({
        username:'',
        password:''
    });    

    const [Token,setToken] = useState({authToken:''})

    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    
    const onSubmit = (data, e) =>{
        setdatos([datos,data])
        var raw = JSON.stringify({"username":data.username,"password":data.password});
        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
          };
        obtenerDatos(requestOptions)
        console.log(datos);
        e.target.reset()
    }    
    
    const obtenerDatos = async (requestOptions) =>{
        try {
            const data = await fetch("https://kevarman20.herokuapp.com/login/",requestOptions)
            const miToken = await data.json()
            setToken([Token,miToken])
           } catch (error) {
        }
    }

    const{register,errors,handleSubmit} = useForm();

        return(
            <Fragment>
                <h1> API  </h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                    <label>Username</label>
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
                        
                    <label>Password</label>
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
                        <button className="btn btn-primary">lOGIN</button>
                    </form>
            </Fragment>
        )
    
}

export default Pokemon