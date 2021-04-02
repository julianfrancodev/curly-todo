import React, { useEffect, useContext } from 'react';
import Project from './Project';

import projectContext from "../../context/projects/ProjectContext";

import { TransitionGroup, CSSTransition } from 'react-transition-group';

const ProjectList = () => {

    // Extraer proyectos del state inicial
    const projectsContext = useContext(projectContext);

    const { projects, getProjects } = projectsContext;

    // Obtener proyectos cuando cargar el componente
    useEffect(() => {
        getProjects();
    }, [])

    console.log(projects);

    // Ver si proyectos tiene contenido
    if (projects.length === 0) return <p>No hay proyectos</p>;



    return (
        <ul className="listado-proyectos">
            <TransitionGroup>
                {projects.map(project =>
                    <CSSTransition
                        timeout={200}
                        classNames="proyecto"
                        key={project.id}>
                        <Project project={project} />
                    </CSSTransition>
                )}

            </TransitionGroup>
        </ul>

    );
}

export default ProjectList;