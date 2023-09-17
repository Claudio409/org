import "./Formulario.css" 
import Campo from "../campo";
import ListaOpciones from "../ListaOpciones";
import { useState } from "react";
import Boton from "../Boton";
 const Formulario=(props)=>{

    const [nombre, actualizarNombre] = useState('');
    const [puesto, actualizarPuesto] = useState('');
    const [foto, actualizarFoto] = useState('');
    const [equipo, actualizarEquipo] = useState('');

    const [titulo, actualizarTitulo] = useState('');
    const [color, actualizarColor] = useState('');
//Destructuracion
    const {registrarColaborador, crearEquipo} = props;
//evita que se refresque la pantalla cuando se haga click en enviar
    const manejarEnvio = (e)=>{
        e.preventDefault();
        //para guardar los valores obtenidos de los estados (props)
        let datosAEnviar = {
            //nombre: nombre, es lo mismo q decir
            nombre, //ya que js sabe q la llave y el valor tienen el mismo nombre
            puesto,
            foto,
            equipo
        };
        registrarColaborador(datosAEnviar);
    }
    const manejarNuevoEquipo = (e)=>{
        e.preventDefault();
        crearEquipo({titulo, colorPrimario:color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required  
                valor={nombre}
                actualizarValor = {actualizarNombre}
            />
            <Campo 
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={puesto}
                actualizarValor = {actualizarPuesto}
            />
            <Campo 
                titulo="Foto" 
                placeholder="Ingresar enlace de Foto" 
                required
                valor={foto}
                actualizarValor = {actualizarFoto}
            />
            <ListaOpciones
                valor = {equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos = {props.equipos}
            />
            {/*Una forma de enviar datos externos: <Boton texto='Crear'/> */}
            {/*Otra forma pero se tiene que porner en la funcion de index.js el comando .children*/}
            <Boton>
                Crear
            </Boton>
        </form>
        <form onSubmit={manejarNuevoEquipo}>
            <h2>Rellena el formulario para crear el equipo.</h2>
            <Campo 
                titulo="Titulo" 
                placeholder="Ingresar titulo" 
                required  
                valor={titulo}
                actualizarValor = {actualizarTitulo}
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor={color}
                actualizarValor = {actualizarColor}
                type='color'
            />
            <Boton>Requistrar Equipo</Boton>
        </form>
    </section>
 }

 export default Formulario;