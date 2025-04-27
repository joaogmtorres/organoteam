import "./BotaoCadastro.css"

const BotaoCadastro = (props) =>{
    return(
        <button className="botao">
            {props.children}
        </button>
    )
}

export default BotaoCadastro