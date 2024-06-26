import { useState } from "react"
import "./Formulario.css"
import Campo from "../Campo"
import ListaOpciones from "../ListaOpciones"
import Boton from "../Boton"

const Formulario = (props) => {

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColor] = useState("")
    
    const { registrarColaborador, crearEquipo } = props
    

    const manejarEnvio = (event) =>{
        event.preventDefault()
        //console.log("Manejar envio")
        let datosEnviar ={
            nombre: nombre,
            puesto: puesto,
            foto : foto,
            equipo
        }
        registrarColaborador(datosEnviar)
    }

    const manejarNuevoEquipo = (e) =>{
        e.preventDefault()
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresa nombre" 
                required={true} 
                valor={nombre} 
                actualizarValor={actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresa puesto" 
                required 
                valor={puesto}
                actualizarValor={actualizarPuesto}
            />
            <Campo 
                titulo="Foto"
                placeholder="Ingresa enlace de foto"  
                required 
                valor={foto}
                actualizarValor={actualizarFoto}
             />
            <ListaOpciones 
                valor={equipo} 
                actualizarEquipo={actualizarEquipo}
                equipos={props.equipos}
            />
            <Boton texto="Crear"/>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresa el titulo" 
                required={true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required 
                valor={color}
                actualizarValor={actualizarColor}
                type="color"
            />
            <Boton texto="Registrar equipo"/>
        </form>
    </section>
}

export default Formulario
