import { useState } from "react"
import "./CampoTexto.css"

const CampoTexto = (props) =>{ //props es como las propiedades de los elementos, datos que enviamos para los componentes
   // const [valor, actualizarValor] =  useState("")

    //console.log("Datos: ",props)
    const placeholderModificado = `${props.placeholder}...`

    const manejarCambio = (e) =>{
        //console.log("Cambio ", e.target.value)
        props.actualizarValor(e.target.value)
    }

    return <div className="campo-texto">
        <label>{props.titulo}</label>
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value={props.valor}
            onChange={manejarCambio}
        />
    </div>
}

export default CampoTexto