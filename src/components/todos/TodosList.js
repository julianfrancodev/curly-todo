import React, { Fragment, useContext } from 'react';
import Todo from './Todo';

import projectContext from '../../context/projects/ProjectContext';


const TodosList = () => {

    const projectsContext = useContext(projectContext);

    const { project, removeProject } = projectsContext;

    // Si no hay proyecto seleccinado 

    if(!project) return <h2>Selecciona un proyecto.</h2>;
    
    // Array destructuring para extraer el pryecto actual

    const [currentProject] = project;



    const tareas = [
        { name: "Elegir plataforma", state: true },
        { name: "Elegir Escenario", state: false },
        { name: "Elegir Metodo", state: true },
        { name: "Elegir Camino", state: false },
    ]

    return (
        <Fragment>
            <h2>
                Proyecto: {currentProject.nameP}
            </h2>

            <ul className="listado-tareas">
                {tareas.length === 0 ? (
                    <li className="tarea"><p>No hay tareas</p></li>
                ) : tareas.map(todo => <Todo todo={todo}/>)}
            </ul>

            <button
            type="button"
            className="btn btn-eliminar"
            onClick={()=> removeProject(currentProject.id)}
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    );
}

export default TodosList;