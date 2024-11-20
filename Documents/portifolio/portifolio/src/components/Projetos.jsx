import "../styles/Projetos.css"
import relogioDigitalImage from "../images/relogio-digital.png"
import sistemaLoginImage from "../images/sistema-login.png"
import reryImportadosImage from "../images/rery-importados.png"
import realidadeDaVida from "../images/realidade-da-vida.png"

export default props => {
    return (
        <div className="projetos" id="projetos">
            <h1>projetos</h1>

            <div className="conjunto-projetos">
                <div className="card">
                    <h5>Relogio digital</h5>
                    <img src={relogioDigitalImage} alt="projeto-image" />
                    <a href="https://g4brielb.github.io/Relogio-Digital/" target="_blank">Ver projeto</a>
                    <p>Projeto simples utilizando apenas HTML, CSS e JavaScript</p>
                </div>

                <div className="card">
                    <h5>Sistema de login</h5>
                    <img src={sistemaLoginImage} alt="projeto-image" />
                    <a href="https://g4brielb.github.io/Rede-social-Bah-as/" target="_blank">Ver projeto</a>
                    <p>(em desenvolvimento) Sistema de Login e criar conta, com sistema de verificação de login, projeto feito apenas com HTML, CSS, JavaScript. O certo seria usar um sistema assim com uma API com banco de dados, porém logo mais terá </p>
                </div>

                <div className="card">
                    <h5>Primeiro Site</h5>
                    <img src={reryImportadosImage} alt="projeto-image" />
                    <a href="https://g4brielb.github.io/ReryImportados/" target="_blank">Ver projeto</a>
                    <p>Primeiro projeto que fiz no inicio dos estudos, tentativa de fazer um site de vendas que com meus conhecimentos atuais pode ser consideravelmente melhorado</p>
                </div>

                <div className="card">
                    <h5>Realidade da Vida</h5>
                    <img src={realidadeDaVida} alt="projeto-image" />
                    <a href="https://g4brielb.github.io/RealidadeDaVida/" target="_blank">Ver projeto</a>
                    <p>Simplismente um brincadeira, fazendo teste de condições do JavaScript</p>
                </div>


            </div>

        </div>
    )
}