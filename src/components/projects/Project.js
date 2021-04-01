import React, {useContext} from 'react';
import projectContext from '../../context/projects/ProjectContext';

const Project = ({project}) => {

    // Obtener el state de los proyectos
    const projectsContext = useContext(projectContext);

    const {currentProject} = projectsContext;



    return ( 
        <li>
            <button
            type="button"
            className="btn btn-black"
            onClick={()=>currentProject(project)}
            >
                {project.nameP}
            </button>
        </li>
     );
}
 
export default Project;
