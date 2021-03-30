import React, { useEffect, useContext } from 'react';
import Project from './Project';

import projectContext from "../../context/projects/ProjectContext";


const ProjectList = () => {

    // Extraer proyectos del state inicial
    const projectsContext = useContext(projectContext);

    const { projects, getProjects } = projectsContext;

    // Obtener proyectos cuando cargar el componente
    useEffect(()=>{
        getProjects();
    },[])

    console.log(projects);

    // Ver si proyectos tiene contenido
    if (projects.length === 0) return null;

   

    return (
        <ul className="listado-proyectos">
            {projects.map(project => <Project key={project.id} project={project} />)}
        </ul>

    );
}

export default ProjectList;