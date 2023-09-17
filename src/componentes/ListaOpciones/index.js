import './ListaOpciones.css'

const ListaOpciones = (props)=>{
   //Siempre es recomendable tener la información concentrada: const equipos=['Programación','Front End','Data Science','Devops','UX y Diseño','Móvil','Innovación y Gestión'];
    //Metodo map -> arreglo.map((equipo, index)=>{return <option></option})
    const manejarCambio = (e)=>{
       props.actualizarEquipo(e.target.value);
    }

    return <div className='lista-opciones'>
        <label>Equipos</label>
        <select value={props.valor} onChange={manejarCambio}>
           {/*Forma general-> {equipos.map((equipo, index)=>{
                return <option key={index}>{equipo}</option>
            })}*/} 
            {/*Forma simplificada */}
            {/*Para poder preparar una opción predeterminada que no sea un valor de equipo se hace lo siguiente */}
            <option value={''} disabled defaultValue={''} hidden className='presentacion-option'>Seleccionar Equipo</option>
            {props.equipos.map((equipo, index)=><option key={index} value={equipo}>{equipo}</option>)}
        </select>
    </div>
}

export default ListaOpciones;