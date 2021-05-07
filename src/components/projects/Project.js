import React, { useContext } from 'react';
import projectContext from '../../context/projects/ProjectContext';
import todoContext from '../../context/todos/TodoContext';

const Project = ({ project }) => {

    // Obtener el state de los proyectos
    const projectsContext = useContext(projectContext);
    const todosContext = useContext(todoContext);

    const { currentProject } = projectsContext;

    const { getTodos } = todosContext;


    // Funcion para agregar el proyecto actual

    const selectProject = (project) => {
        currentProject(project);
        getTodos(project._id); // filtar tareas cuando se de click
    }

    return (
        <li>
            <button
                type="button"
                className="btn btn-black"
                onClick={() => selectProject(project)}
            >
                {project.name}
            </button>
        </li>
    );
}

export default Project;
