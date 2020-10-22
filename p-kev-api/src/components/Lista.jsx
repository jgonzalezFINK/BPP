import React, { Fragment } from 'react'

import "../styles.css"
const Lista = () =>{

      var myHeaders = new Headers();
      myHeaders.append("Authorization", "Token 18e59323d194db38c608b4d2903443dd997a5588");
      
      var requestOptions = {
        method: 'GET',
        headers: myHeaders,
        redirect: 'follow'
      };
        
        const producnto = fetch("https://kevarman20.herokuapp.com/v2/productos/", requestOptions)
        .then(result => {result.json()})
        console.log(producnto);
        
    return(
        <Fragment>
            <h1>Productos</h1>
    <div>{}</div>
        </Fragment>
    )

}

export default Lista 