import Colaborador from "../Colaborador"
import hexToRgba from 'hex-to-rgba';
import "./Times.css"

const Time = ({time, colaboradores, aoDeletar, mudarCor}) =>{
    return (
        (colaboradores.length > 0) ? 
            <section className="times" style={{ backgroundImage: 'url(/imagens/fundo.png)', backgroundColor: hexToRgba(time.cor, '0.6') }}>
                <input 
                    type="color"   
                    className="input-color"
                    onChange={event => mudarCor(event.target.value, time.id)}
                    value={time.cor} 
                    />
                <h3 style={{ borderColor: time.cor}}>{time.nome}</h3>
                <div className="colaboradores">
                    {colaboradores.map((colaborador, indice) => 
                        <Colaborador 
                            corDeFundo = {time.cor}
                            key = {indice}
                            colaborador={colaborador}
                            aoDeletar={aoDeletar}
                        />)}
                </div>
            </section>
        : ''
    )
}


export default Time
