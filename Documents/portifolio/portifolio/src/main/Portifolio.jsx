import { useEffect } from "react"
import Apresentacao from "../components/Apresentacao"
import Cabecalho from "../components/Cabecalho"
import Habilidades from "../components/Habilidades"
import Sobre from "../components/Sobre"
import "../styles/Portifolio.css"
import Projetos from "../components/Projetos"


export default props => {


    useEffect(() => {
        document.title = `Portifólio`
    })

    return(
        <div className="portifolio">
            <Cabecalho />
            <Apresentacao />
            <Habilidades />
            <Sobre />
            <Projetos />
        </div>
    )
}