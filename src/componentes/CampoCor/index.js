import './CampoCor.css'

const CampoCor = ({ valor, aoAlterar }) => {
    return (
        <div className="campo-cor-form">
            <label>Cor</label>
            <input 
                className='color-box'
                type="color" 
                value={valor} 
                onChange={evento => aoAlterar(evento.target.value)} 
            />
        </div>
    )
}

export default CampoCor