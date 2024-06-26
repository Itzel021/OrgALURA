import "./Footer.css"
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa6";

const Footer = () => {
    return <footer className='footer' style={{ backgroundImage: "url(/img/footer.png)" }}>
        <div className='redes'>
            <a href='https://github.com/Itzel021'>
                <FaGithub />
            </a>
            <a href="https://www.linkedin.com/in/itzeldaniela21/">
                <FaLinkedin />
            </a>
            <a href='#'>
                <FaDiscord />
            </a>
           
        </div>
        <img src='./img/Logo.png' alt='org' />
        <strong>Desarrollado por Itzel Daniela Martinez Carrera</strong>
    </footer>
}

export default Footer