import React, {useContext} from 'react';

import projectContext from '../../context/projects/ProjectContext';
import todoContext from '../../context/todos/TodoContext';


const Todo = ({todo}) => {

    const projectsContext = useContext(projectContext);
    const todosContext = useContext(todoContext);

    const { removeTodo, getTodos } = todosContext;
    const { project } = projectsContext;

    // Extraer el proyecto con array destructuring

    const [currentProject] = project;

    const deleteTodo = (id)=>{
         removeTodo(id);
         getTodos(currentProject.id);
    }


    return ( 
        <li className="tarea sombra">
            <p>{todo.nameT}</p>
            <div className="estado">
                {todo.state 
                ?(<button
                    type="button"
                    className="completo"
                >
                    Completo
                </button>):
                (<button
                    type="button"
                    className="incompleto"
                >
                    Incompleto
                </button>)
                }
            </div>
            <div className="acciones">
                <button
                type="button"
                className="btn btn-primario"
                >
                    Editar
                </button>
                <button
                type="button"
                className="btn btn-secundario"
                onClick={()=>deleteTodo(todo.id)}
                >
                    Eliminar
                </button>
            </div>
        </li>
     );
}
 
export default Todo;