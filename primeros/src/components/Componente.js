import React, { Component } from "react"; 

/* funcion expresada */
const Componente = props => <h2>{props.msg}</h2>;


/* funcion no declarada 
function Componente(props) {
    return <h2>{props.msg}</h2>;
}*/

export default Componente;
