import "./campo.css"
import {useState} from 'react';
const Campo= (props) =>{
    //Para poder manejar los input con los useState
   // const [valor, actualizarValor] = useState('');
    //ahora para recibir el valor del useState
    const manejarCambio = (e)=>{
        props.actualizarValor(e.target.value);
    }
    //Destructuracion
    const {type='text'} =props;

    /*Se puede modificar los props con concatención: const placeholderModifcado = `${props.placeholder}...` */
    return <div className={`campo campo-${type}`}>
        <label>{props.titulo}</label>
        <input placeholder = {props.placeholder} 
        required={props.required}
        //para capturar el valor del input
        value={props.valor}
        //Para capturar el cambio dentro del input
        onChange={manejarCambio}
        //para cambiar tipo de input
        type={type}
        ></input>
    </div>
}

export default Campo;