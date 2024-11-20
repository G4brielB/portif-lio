import "../styles/ImagensHabilidades.css"

export default props => {
    return(
        <div className="imagensHabilidades">
            <div className="svg">
                {props.imageSvg}
            </div>
            <div>
                <p>{props.description}</p>
            </div>
        </div>
        
    )
}