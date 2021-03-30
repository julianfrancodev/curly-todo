import React from 'react';
import CreateProject from '../projects/CreateProject';
import ProjectList from '../projects/ProjectList';

const SideBar = () => {
    return ( 
        <aside>
            <h1>MERN <span>Tasks</span></h1>
            <CreateProject/>
            <div className="proyectos">
                <h2>
                    Tus Proyectos
                </h2>

                <ProjectList/>
            </div>
        </aside>
     );
}
 
export default SideBar;