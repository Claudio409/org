import Header from './componentes/Header/Header';
import Formulario from './componentes/Formulario/Formulario';
import MiOrg from './componentes/MiOrg';
import {useState} from 'react';
import './App.css';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';
import {v4 as uuid} from 'uuid';

function App() {
  const [mostrarFormulario, actualizarMostrar] = useState(true);
  //Para colaboradores
  const [colaboradores, actualizarColaborador] = useState([
    {
      id: uuid(),
      equipo: "Front End",
      foto: "https://github.com/harlandlohora.png",
      nombre: "Harland Lohora",
      puesto: "Instructor",
      fav: true
    },
    {
      id: uuid(),
      equipo: "UX y Diseño",
      foto: "https://github.com/JeanmarieAluraLatam.png",
      nombre: "Jeanmarie Quijada",
      puesto: "Instructora en Alura Latam",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Programación",
      foto: "https://github.com/christianpva.png",
      nombre: "Christian Velasco",
      puesto: "Head de Alura e Instructor",
      fav: false
    },
    {
      id: uuid(),
      equipo: "Innovación y Gestión",
      foto: "https://github.com/JoseDarioGonzalezCha.png",
      nombre: "Jose Gonzalez",
      puesto: "Dev FullStack",
      fav: false
    }
  ])
  //Este state reemplaza el arrys equipos
  const [equipos, actualizarEquipos] = useState([
    {
      id: uuid(),
      titulo: 'Programación',
      colorPrimario:'#57C278',
      colorSecundario:'#D9F7E9'
    },
    {
      id: uuid(),
      titulo:'Front End',
      colorPrimario:'#82CFFA',
      colorSecundario:'#E8F8FF'
    },
    {
      id: uuid(),
      titulo:'Data Science',
      colorPrimario:'#A6D157',
      colorSecundario:'#F0F8E2'
    },
    {
      id: uuid(),
      titulo:'Devops',
      colorPrimario:'#E06B69',
      colorSecundario:'#FDE7E8'
    },
    {
      id: uuid(),
      titulo:'UX y Diseño',
      colorPrimario:'#DB6EBF',
      colorSecundario:'#FAE9F5'
    },
    {
      id: uuid(),
      titulo:'Móvil',
      colorPrimario:'#FFBA05',
      colorSecundario:'#FFF5D9'
    },
    {
      id: uuid(),
      titulo:'Innovación y Gestión',
      colorPrimario:'#FF8A29',
      colorSecundario:'#FFEEDF'
    }
  ])
  
  //ternario --> condicion ? mostrar : noMostrar;
  const manejarClick = ()=>{
    actualizarMostrar(!mostrarFormulario);
  }
  //Registrar colaborador
  const registrarColaborador = (colaborador)=>{
    //spread operator-> lo que hace es copiar y lluego pegar algo
    actualizarColaborador([...colaboradores, colaborador])
  }
  //Eliminar colaborador
  const eliminarColaborador = (id)=>{
    const nuevosColaboradores = colaboradores.filter((colaborador)=>colaborador.id !== id);
    actualizarColaborador(nuevosColaboradores);
  }
  //Actualizar Color de equipo
  const actualizarColor = (color, id)=>{
    const equiposActualizados = equipos.map((equipo)=>{
      if (equipo.id===id){
        equipo.colorPrimario = color;
      }
      return equipo;
    })
    actualizarEquipos(equiposActualizados);
  }
  //para crear otro equipo
  const crearEquipo = (nuevoEquipo)=>{
    actualizarEquipos([...equipos, {...nuevoEquipo, id:uuid()}])
  }
  //Dar loke
  const like = (id)=>{
    const colaboraresActualizados = colaboradores.map((colaborador)=>{
      if (colaborador.id===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador;
    })
    actualizarColaborador(colaboraresActualizados);
  }


  //Lista de equipos
  /*const equipos=[
    {
      titulo: 'Programación',
      colorPrimario:'#57C278',
      colorSecundario:'#D9F7E9'
    },
    {
      titulo:'Front End',
      colorPrimario:'#82CFFA',
      colorSecundario:'#E8F8FF'
    },
    {
      titulo:'Data Science',
      colorPrimario:'#A6D157',
      colorSecundario:'#F0F8E2'
    },
    {
      titulo:'Devops',
      colorPrimario:'#E06B69',
      colorSecundario:'#FDE7E8'
    },
    {
      titulo:'UX y Diseño',
      colorPrimario:'#DB6EBF',
      colorSecundario:'#FAE9F5'
    },
    {
      titulo:'Móvil',
      colorPrimario:'#FFBA05',
      colorSecundario:'#FFF5D9'
    },
    {
      titulo:'Innovación y Gestión',
      colorPrimario:'#FF8A29',
      colorSecundario:'#FFEEDF'
    }
  ]*/
  return (
    <div className="App">
      {/*{Header()} una de las formas de llamar a los componentes*/}
      {/*<Header></Header> segunda forma de llamar a los componentes*/}
      <Header/>
      {/*Otra forma de llegar al mismo resultado es con--> mostrarFormulario && <Formulario/> --> se denomina cortocircuito  */}
      {
        mostrarFormulario ? <Formulario 
          equipos={equipos.map((equipo)=>equipo.titulo)}
          registrarColaborador= {registrarColaborador}
          crearEquipo = {crearEquipo}
        /> : <></>}
      <MiOrg cambiarMostrar = {manejarClick}/>
      
      {/* Esta es una manera larga
        equipos.map((equipo)=>{
          return <Equipo datos={equipo} key={equipo.titulo}/>;
        })
        */}
      {/*Esta es la manera corta... quitando el return */}
      {
        equipos.map((equipo) =><Equipo 
          datos={equipo} 
          key= {equipo.titulo}
          colaboradores={colaboradores.filter(colaborador=>colaborador.equipo===equipo.titulo)}
          eliminarColaborador = {eliminarColaborador}
          actualizarColor={actualizarColor}
          like={like}
          />)
      }
      <Footer/>
    </div>
  );
}

export default App;
