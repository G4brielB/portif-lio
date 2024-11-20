import "../styles/Sobre.css"
import imgDesc from "../images/img-desc.jpg"

export default props => {
    return(
        <div className="sobre" id="sobre">
            <img src={imgDesc} alt="imagem-sobre" />
            <p>Olá sou Gabriel! Sou um estudante de programação e estou fazendo Analise e desenvolvimento de sistemas na Descomplica Faculdade Digital. Desde sempre gostei de computador, e atualmente tenho curso tecnico de manutenção e montagem de computador e notebook, redes e cabeamento estruturado. Estou em busca de virar um fullstack e uso de cursos fora da faculdade para conseguir chegar a esse objetivo, um deles sendo o curso web moderno na cod3r que está me ajudando muito com meu aprendizado front-end e back-end.</p>
        </div>
    )
}