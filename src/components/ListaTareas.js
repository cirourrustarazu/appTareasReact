import React, {useState} from 'react'
import TareaFormulario from './TareaFormulario'
import '../css/ListaTareas.css'
import Tarea from './Tarea'

function ListaTareas() {
    const [tareas, setTareas] = useState([])

    const agregarTarea = tarea=>{
     
        if(tarea.texto.trim()){
          tarea.texto = tarea.texto.trim()
          const tareaActualizada = [tarea,...tareas]
          setTareas(tareaActualizada)
        }
    }

    const eliminarTarea = id =>{
      const tareaActualizada = tareas.filter(tarea=>tarea.id !== id)
      setTareas(tareaActualizada)
    }
    const completarTarea = id =>{
      const tareaActualizada = tareas.map(tarea=>{
        if(tarea.id === id){
          tarea.completada = !tarea.completada
        }
        return tarea
      })
      setTareas(tareaActualizada)
    }

  return (
    <>
    <TareaFormulario onSubmit={agregarTarea}/>
    <div className='lista-tareas'>
        {
            tareas.map((tarea)=>
            <Tarea
            key={tarea.id}
            id={tarea.id}
            texto={tarea.texto}
            completada={tarea.completada}
            completarTarea={completarTarea}
            eliminarTarea={eliminarTarea}
            />

            )
        }
    </div>
    </>
  )
}

export default ListaTareas