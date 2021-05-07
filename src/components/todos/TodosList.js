import React, { Fragment, useContext } from 'react';
import Todo from './Todo';

import projectContext from '../../context/projects/ProjectContext';
import todoContext from '../../context/todos/TodoContext';

import { CSSTransition, TransitionGroup } from "react-transition-group";

const TodosList = () => {

    const projectsContext = useContext(projectContext);
    const todosContext = useContext(todoContext);

    const { project, removeProject } = projectsContext;
    const { todosproject } = todosContext;
    // Si no hay proyecto seleccinado 

    if (!project) return <h2>Selecciona un proyecto.</h2>;

    // Array destructuring para extraer el pryecto actual

    const [currentProject] = project;


    return (
        <Fragment>
            <h2>
                Proyecto: {currentProject.name}
            </h2>

            <ul className="listado-tareas">
                {todosproject.length === 0
                    ? (
                        <li className="tarea"><p>No hay tareas</p></li>
                    )
                    :

                    todosproject.map(todo => <Todo key={todo._id} todo={todo} />)
                }
            </ul>

            <button
                type="button"
                className="btn btn-eliminar"
                onClick={() => removeProject(currentProject._id)}
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    );
}

export default TodosList;