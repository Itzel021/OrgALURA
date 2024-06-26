import "./ListaOpciones.css"
const ListaOpciones = (props) => {
    //map se usa para recorrer arreglos
    //Metodo map -> arreglo.map( (equipo, index) => {
    //  return <option><option/>
    //})

    
    const manejarCambio = (e) =>{
        //console.log("Cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
            /**Forma simplificada */
            <option value="" disable defaultValue="" hidden>Seleccionar equipo</option>
            {props.equipos.map((equipo, index) => <option key={index} value={equipo}>{equipo}</option>)}
            
            {/**Forma completa
              {equipos.map((equipo, index) => {
                return <option key={index}>{equipo}</option>
            })}
             */}
            
        </select>
    </div>
}

export default ListaOpciones