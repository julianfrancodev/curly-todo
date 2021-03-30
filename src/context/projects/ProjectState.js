import React, { useReducer } from 'react';

import uuid from 'uuid';

import projectContext from './ProjectContext';
import projectReducer from './ProjectReducer';
import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM
} from '../../types';


const ProjectState = props => {

    const projects = [
        { id: 1, nameP: "Tienda Mac" },
        { id: 2, nameP: "Tienda Windows" },
        { id: 3, nameP: "Tienda Linux" },
        { id: 4, nameP: "Tienda Solaris" },
    ]


    const initialState = {

        projects: [],
        formulario: false,
        errorform: false
    }

    // Dispatch para ejecutar las acciones

    const [state, dispatch] = useReducer(projectReducer, initialState);

    // Serie de funciones para el CRUD

    const showForm = () => {
        dispatch({
            type: FORM_PROJECT
        });
    }


    // Obtener los proyectos

    const getProjects = () => {
        dispatch({
            type: GET_PROJECTS,
            payload: projects
        })
    }

    //Agregar nuevo proyecto 

    const addProject = (project) => {
        project.id = uuid.v4();

        // Agregar el proyecto al array que esta en el state

        console.log(project);

        dispatch({
            type: ADD_PROJECT,
            payload: project
        })
    }


    // Validar formulario por errores 

    const showError =()=>{
        dispatch({
            type: VALIDATE_FORM
        })
    }

    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                formulario: state.formulario,
                errorform: state.errorform,
                showForm,
                getProjects,
                addProject,
                showError
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;