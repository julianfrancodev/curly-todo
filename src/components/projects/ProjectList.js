import React, { useEffect, useContext } from 'react';
import Project from './Project';

import projectContext from "../../context/projects/ProjectContext";
import AlertContext from "../../context/alert/AlertContext";
import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ProjectList = () => {

    // Extraer proyectos del state inicial
    const projectsContext = useContext(projectContext);
    const alertContext = useContext(AlertContext);

    const { projects, message, getProjects } = projectsContext;

    const { alert, showAlert } = alertContext;

    // Obtener proyectos cuando cargar el componente
    useEffect(() => {

        // Si hay un error
        if (message) {
            showAlert(message.msg, message.category);
        }

        getProjects();

        //eslint-disable-next-line

    }, [message])

    // Ver si proyectos tiene contenido
    if (projects.length === 0) return <p>No hay proyectos</p>;



    return (
        <ul className="listado-proyectos">

            {alert ? (<div className={`alerta ${alert.category}`}>{alert.message}</div>) : null}
            <TransitionGroup>
                {projects.map(project =>
                    <CSSTransition
                        timeout={200}
                        classNames="proyecto"
                        key={project._id}>
                        <Project project={project} />
                    </CSSTransition>
                )}

            </TransitionGroup>
        </ul>

    );
}

export default ProjectList;