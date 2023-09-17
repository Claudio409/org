import {useState} from 'react'


import './MiOrg.css'

const MiOrg = (props)=>{
    //Estados - Hooks
    //Primer hooks -> useState
    // se usa como funcion useState()
    //Se usa como -> const [nombredelaVariable, funcionActualizar] = useState(ValorInicial)
    //const [mostrar, actualizarMostrar] = useState(true);
   // const manejarClick = () => {
        //actualizarMostrar(!mostrar) -> con esto se genera un suich o interruptor para poder hacer una acción determinada al cambiar de true a false
        //console.log("mostar o ocultar", mostrar);
        //actualizarMostrar(!mostrar)
   // }
    return <section className='orgSection'>
        <h3 className='title'>Mi Organización</h3>
        <img src='/img/add.png' alt='add' /*onClick={manejarClick}*/ onClick={props.cambiarMostrar} />
    </section>
}


export default MiOrg;