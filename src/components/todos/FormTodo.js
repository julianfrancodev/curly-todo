import React,{useContext} from 'react';
import projectContext from "../../context/projects/ProjectContext";


const FormTodo = () => {

    const projectsContext = useContext(projectContext);

    const {project} = projectsContext;

    if(! project) return null;

    return ( 
        <div className="formulario">
            <form>
                <div className="contenedor-input">
                    <input
                    type='text'
                    className='input-text'
                    placeholder='Nombre Tarea...'
                    name='nameT'
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value='Agregar Tarea'
                    />
                </div>
            </form>
        </div>
     );
}
 
export default FormTodo;