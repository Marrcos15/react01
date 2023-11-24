import React, { useState } from 'react';
import ajedrez from './ajedrez.jpg';
import './App.css';
import  { Block, Bicicalle, Block2 } from './componentes/pedazos.jsx';
import { Counter } from './componentes/Counter.jsx';
import { Alternate } from './componentes/Alternate.jsx';
import { ElPadre } from './componentes/ControladoPadre.jsx';


function Header(props){
  return(
    <section className='App'>
      <h1>Web de {props.name}</h1>
      <p>{props.name} de {props.type}</p>
      <img src={ajedrez} height={400} alt='Portada ajedrez rey ahogado'/>
    </section>
  );
}

// function Main(props){
//   return(
//     <section>
//       <p>Apps usadas:</p>
//       <ul>
//         {props.apps.map((single) => <li key={single.id}>{single.name}</li>)}
//       </ul> 
//     </section>
//   );
// }


function Hellowworld(){
  return(
    <div>Hola mundo</div>
  );
}

function ListItem(props){
  return(
    <li>{props.value}</li>
  )
}
const apps = [
  "Estudia Ajedrez",
  "Revisa partidas",
  "Juega contra otro jugador"
];

function AppsElement(props){
  const apps = props.apps;
  return(
    <ul>
      {apps.map((single, i) => <ListItem key={i} value= {single} />)}
    </ul>
  );
}
// const appsElement = apps.map((single, i) => ({id: i, name:single}));

const Lang =(props) => <div>Esa es una arrow con {props.lenguaje}</div>


function Contenido() {
  return(
    <> 
      {/* Componente no controlado con renderizado condicional y toggle */}
      <Alternate/> 
      <Header name="Mi Primera APP" type="React"/>
      <article className='App-header'>
        <AppsElement apps ={apps}/>
      {/* <Main apps = {appsElement} /> */}
        <div>Estos son mis componentes:<Hellowworld /><Lang lenguaje="React"/></div>
      </article>
      <article className='center'>
        <h3> Articulos del blog de bicis: </h3>
          <p>Encuentra en nuetro blog toda la información</p>
          <div className='row'>
            <Block isloged={true} img='btt' title = "Rigida o doble" text='Rendimiento o comodidad, la elección es dura' />
            <Block isloged={true} img='ciclovsgravel' title = "Ciclocross y gravel" text='Las diferencias son muy sutiles, pero están...' />
            <Block isloged={false} img='fatbike' title = "Fat Bikes" text='Es decir, ¿es una bici?. A mi no me lo parece.'  />
          </div>
        <Bicicalle />
        <Block2 isloged={false} img='fatbike' title = "Fat Bikes" text='Es decir, ¿es una bici?. A mi no me lo parece.'  />
        <Counter/>
        </article>
    </>
  )
}

function App() {
    // Gestion mostrarTodo
  let boton_name = ""
  const [mostrarTodo , setMostrarTodo] = useState();
  const handleMostrarTodo = () => {
    setMostrarTodo((isVisible) => !isVisible);
  }

  (mostrarTodo) ? (boton_name="Ocultar Todo") : (boton_name="Mostrar Todo");

  return (
    <>
      <ElPadre/>
      <button onClick={handleMostrarTodo}>{boton_name}</button>
      {(mostrarTodo) ? <Contenido/> : ""}
    </>
  );
}

export default App;
