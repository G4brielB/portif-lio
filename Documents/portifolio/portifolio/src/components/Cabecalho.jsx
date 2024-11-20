import "../styles/Cabecalho.css"
import perfil from "../images/perfil.png"



export default props => {


    return(
        <div className="cabecalho">
            <div className="nav-img">
                <img src={perfil} alt="foto-perfil" />
                <h5>GABRIEL DE CARVALHO SILVA</h5>
            </div>

            <div className="nav-menu">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"/>
                    </svg>
                </div>
                <ul>
                    <li><a href="#inicio">Inicio</a></li>
                    <li><a href="#habilidades">Habilidades</a></li>
                    <li><a href="#sobre">Sobre</a></li>
                    <li><a href="#projetos">Projetos</a></li>
                </ul>
            </div>
        </div>
    )
}