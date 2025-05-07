import './Formulario.css'
import CampoTexto from '../CampoTexto'
import ListaSuspensa from '../ListaSuspensa'
import BotaoCadastro from '../BotaoCadastro'
import { useState } from 'react'
import CampoCor from '../CampoCor'

const Formulario = ({cadastrarTime, times, aoColaboradorCadastrado}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')
    const [nomeTime, setNomeTime] = useState('')
    const [corTime, setCor] = useState('')
        
    const aoSalvar = (event)=>{
        event.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
        setNome('')
        setCargo('')
        setImagem('')
    }

    const aoSalvarTime = (event)=>{
        event.preventDefault()
        cadastrarTime({ nome: nomeTime, cor: corTime })
        setCor('')
        setNomeTime('')
    }

    return (
        <section className='formulario'>
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto 
                    required = {true} 
                    label="Nome" 
                    placeholder='Digite seu nome' 
                    valor={nome} 
                    aoAlterar={valor =>setNome(valor)}/>
                <CampoTexto 
                    required = {true} 
                    label="Cargo" 
                    placeholder='Digite seu cargo' 
                    valor={cargo} 
                    aoAlterar={valor =>setCargo(valor)} />
                <CampoTexto 
                    label="Imagem" 
                    placeholder='Informe o endereço da imagem' 
                    valor={imagem} 
                    aoAlterar={valor =>setImagem(valor)} />
                <ListaSuspensa 
                    label="Times" 
                    itens={times} 
                    required={true} 
                    valor={time} 
                    aoAlterar={valor => setTime(valor)}/>
                <BotaoCadastro>
                    Criar Card
                </BotaoCadastro>
            </form>
            <form onSubmit={aoSalvarTime}>
                <h2>Preencha os dados para criar um novo Time</h2>
                <CampoTexto 
                    required = {true} 
                    label="Nome" 
                    placeholder='Digite o nome do Time' 
                    valor={nomeTime} 
                    aoAlterar={valor =>setNomeTime(valor)}
                />
                <CampoCor 
                    valor={corTime} 
                    aoAlterar={valor => setCor(valor)} 
                />
                <BotaoCadastro>
                    Criar Time
                </BotaoCadastro>
            </form>
        </section>
    )
}

export default Formulario