import React, { useContext } from 'react';

import projectContext from '../../context/projects/ProjectContext';
import todoContext from '../../context/todos/TodoContext';


const Todo = ({ todo }) => {

    const projectsContext = useContext(projectContext);
    const todosContext = useContext(todoContext);

    const { removeTodo, getTodos, updateStateTodo, saveCurrentTodo } = todosContext;
    const { project } = projectsContext;

    // Extraer el proyecto con array destructuring

    const [currentProject] = project;

    const deleteTodo = (id) => {
        removeTodo(id);
        getTodos(currentProject.id);
    }

    // Funcion que modifica el estado de las tareas

    const updateState = todo => {
        if (todo.state) {
            todo.state = false;
        } else {
            todo.state = true;
        }

        updateStateTodo(todo);
    }


    // Agrega una tarea actual cuando el usuario desea editar

    const selectTodo = (todo) => {
        saveCurrentTodo(todo);
    }


    return (
        <li className="tarea sombra">
            <p>{todo.name}</p>
            <div className="estado">
                {todo.state
                    ? (<button
                        type="button"
                        className="completo"
                        onClick={() => updateState(todo)}
                    >
                        Completo
                    </button>) :
                    (<button
                        type="button"
                        className="incompleto"
                        onClick={() => updateState(todo)}
                    >
                        Incompleto
                    </button>)
                }
            </div>
            <div className="acciones">
                <button
                    type="button"
                    className="btn btn-primario"
                    onClick={() => selectTodo(todo)}
                >
                    Editar
                </button>
                <button
                    type="button"
                    className="btn btn-secundario"
                    onClick={() => deleteTodo(todo.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
    );
}

export default Todo;