
import './App.css';
import ListaTareas from './components/ListaTareas';
import freeCodeLogo from './img/FreeCodeCamp_logo.svg.png'
function App() {
  return (
    <div className="app-tareas">
      <div className="logo-contenedor">
        <img src={freeCodeLogo}
        className="logo" alt=""/>
      </div>
      <div className="tarea-contenedor">
        <h1>Mis Tareas</h1>
        <ListaTareas/>
      </div>
    </div>
  );
}

export default App;
