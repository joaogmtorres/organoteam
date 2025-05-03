import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({colaborador, corDeFundo, aoDeletar}) => {
    return(<div className='colaborador'>
        <div className='cabecalho' onClick={aoDeletar} style={{ backgroundColor:corDeFundo} }>
        <AiFillCloseCircle size={25}className='apagar'/>
            <img src={colaborador.imagem} alt={colaborador.nome}/>
        </div>
        <div className='rodape'>
            <h4>{colaborador.nome}</h4>
            <h5>{colaborador.cargo}</h5>
        </div>
    </div>
    )
}

export default Colaborador