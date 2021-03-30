import React from 'react';

const Project = ({project}) => {
    return ( 
        <li>
            <button
            type="button"
            className="btn btn-black"
            >
                {project.nameP}
            </button>
        </li>
     );
}
 
export default Project;
