import Colaborador from "../Colaborador"
import "./Times.css"

const Times = (props) =>{
    const css = { backgroundColor: props.corSecundaria}
    return (
        (props.colaboradores.length > 0) ? <section className="times" style={css}>
            <h3 style={{ borderColor: props.corPrimaria}}>{props.nome}</h3>
            <div className="colaboradores">
                {props.colaboradores.map(colaborador => <Colaborador 
                    corDeFundo = {props.corPrimaria}
                    key = {colaborador.nome}
                    nome = {colaborador.nome} 
                    cargo = {colaborador.cargo} 
                    imagem = {colaborador.imagem}/>)}
            </div>
            
        </section>
        : ''
    )
}

export default Times