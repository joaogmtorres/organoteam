import "./BotaoCadastro.css"

const BotaoCadastro = (props) =>{
    return(
        <button type="submit" className="botao">
            {props.children}
        </button>
    )
}

export default BotaoCadastro