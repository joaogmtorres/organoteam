import './ListaSuspensa.css'

const ListaSuspensa = (props) => {
    return(
        <div className='lista-suspensa'>
            <label>{props.label}</label>
            <select 
                required={props.required} 
                onChange={event => props.aoAlterar(event.target.value)} 
                value={props.valor}>
                <option value=""></option>
                {props.itens.map(item =>{return <option key={item} >{item}</option>})}
            </select>    
        </div>
    )
}

export default ListaSuspensa