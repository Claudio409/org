import "./Equipo.css"
import Colaborador from "../Colaborador";
import hexToRgba from 'hex-to-rgba';
const Equipo = (props)=>{
    //Destructuracion
    const {titulo, colorPrimario, colorSecundario, id} = props.datos;
    const {colaboradores, eliminarColaborador, actualizarColor, like} = props;
    //Se podria poner el style directo style={{backgroundColor: props.datos.colorPrimario} en la etiqueta pero se puede hacer por separado:
    const backgroud_equipo = { backgroundColor: hexToRgba(colorPrimario,0.6)}
    const color_titulo_equipo = {borderColor: colorPrimario}
    return <>
        {colaboradores.length>0 && 
            <section className="equipo" style={backgroud_equipo}>
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(event)=>{actualizarColor(event.target.value, id)}}
                />
                <h3 style={color_titulo_equipo}>{titulo}</h3>
                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador,index)=><Colaborador 
                            datos={colaborador} 
                            key={index}
                            colorPrimario = {colorPrimario}
                            eliminarColaborador={eliminarColaborador}
                            like={like}
                        />)
                    }
                </div>
            </section>
        }
    </>
}

export default Equipo;