import './Colaborador.css'
import { AiFillCloseCircle } from 'react-icons/ai';

const Colaborador = ({colaborador, corDeFundo, aoDeletar}) => {
    return(<div className='colaborador'>
        <AiFillCloseCircle 
            onClick={()=>aoDeletar(colaborador.id)}
            size={25}
            className='apagar'
        />
        <div className='cabecalho' style={{ backgroundColor:corDeFundo} }>
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