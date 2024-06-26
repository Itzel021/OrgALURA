import "./Colaborador.css"
import { AiFillCloseCircle } from "react-icons/ai"
import { IoHeartSharp } from "react-icons/io5";
import { GoHeart } from "react-icons/go";

const Colaborador = (props) => {
   //condicion ? verdadero : falso

    const { nombre, puesto, foto, equipo, id, fav} = props.datos
    const { colorPrimario, eliminarColaborador, like } = props
    return <div className="colaborador">
        <AiFillCloseCircle className="eliminar" onClick={()=>eliminarColaborador(id)} />
        <div className="encabezado" style={{ backgroundColor: colorPrimario }}>
            <img src={foto} alt={nombre} />
        </div>
        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            {
                fav ? <IoHeartSharp color="red" onClick={() => like(id)}/> : <GoHeart onClick={() => like(id)}/>
            }
        </div>
    </div>
}

export default Colaborador