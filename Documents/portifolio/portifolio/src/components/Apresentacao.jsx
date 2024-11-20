import "../styles/Apresentacao.css"

export default props => {


    return(
        <div className="apresentacao" id="inicio">
            <div className="nome-info">
                <h1>Gabriel de Carvalho Silva <svg id="terminalIcon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z" />
                </svg>
                </h1>
                <p>Desenvolvedor front-end</p>
            </div>

            <div className="gif">
                <img src="https://images.vexels.com/content/176983/preview/planetary-atom-model-flat-stroke-44826c.png" alt="atomo-react" />
                <p>Desenvolvido em React</p>
            </div>
        </div>
    )
}