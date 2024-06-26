import { useState } from "react"
import "./Campo.css"

const Campo = (props) =>{ //props es como las propiedades de los elementos, datos que enviamos para los componentes
   // const [valor, actualizarValor] =  useState("")

    //destructuracion
    const { type = "text" } = props



    //console.log("Datos: ",props)
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) =>{
        //console.log("Cambio ", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
            type={type}
        />
    </div>
}

export default Campo