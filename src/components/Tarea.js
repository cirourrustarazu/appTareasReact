import React from 'react'
import '../css/Tarea.css'
import { AiOutlineCloseCircle } from "react-icons/ai";


function Tarea({id,texto, completada, completarTarea, eliminarTarea}) {
  return (
    <div className={completada ? 'contenedor completada' : 'contenedor'}>
        <div className='tarea-txt'
              onClick={()=>completarTarea(id)}>
            {texto}
        </div>
        <div className='tarea-contenedor-iconos'
             onClick={()=>eliminarTarea(id)}>
            <AiOutlineCloseCircle className='tarea-icono'/>
        </div>
    </div>
  )
}

export default Tarea