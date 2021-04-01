import React, { useReducer } from 'react';

import uuid from 'uuid';

import projectContext from './ProjectContext';
import projectReducer from './ProjectReducer';

import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    REMOVE_PROJECT
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
        errorform: false,
        project: null
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

    const showError = () => {
        dispatch({
            type: VALIDATE_FORM
        })
    }

    // Selecciona el proyecto que el usuario dio click

    const currentProject = (project) => {
        dispatch({
            type: CURRENT_PROJECT,
            payload: project
        })
    }

    // Eliminar un proyecto

    const removeProject = (projectId) => {

        dispatch({
            type: REMOVE_PROJECT,
            payload: projectId
        })
    }




    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                formulario: state.formulario,
                errorform: state.errorform,
                project: state.project,
                showForm,
                getProjects,
                addProject,
                showError,
                currentProject,
                removeProject
            }}
        >
            {props.children}
        </projectContext.Provider>
    )
}

export default ProjectState;