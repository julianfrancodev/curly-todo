import React, { useReducer } from 'react';

import projectContext from './ProjectContext';
import projectReducer from './ProjectReducer';

import clientAxios from '../../config/axios';

import {
    FORM_PROJECT,
    GET_PROJECTS,
    ADD_PROJECT,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    REMOVE_PROJECT,
    PROJECT_ERROR
} from '../../types';


const ProjectState = props => {

    const initialState = {

        projects: [],
        formulario: false,
        errorform: false,
        project: null,
        message: null
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

    const getProjects = async () => {

        try {


            const response = await clientAxios.get('/api/projects');

            console.log(response);

            dispatch({
                type: GET_PROJECTS,
                payload: response.data.projects
            })

        } catch (e) {
            console.log(e.response)
        }


    }

    //Agregar nuevo proyecto 

    const addProject = async (project) => {

        try {
            const response = await clientAxios.post('/api/projects', {
                name: project.nameP
            });

            console.log(response);


            dispatch({
                type: ADD_PROJECT,
                payload: response.data
            })
        } catch (e) {
            console.log(e.response);
        }
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

    const removeProject = async (projectId) => {


        try {
            await clientAxios.delete(`/api/projects/${projectId}`);

            dispatch({
                type: REMOVE_PROJECT,
                payload: projectId
            })
        } catch (e) {
            console.log(e.response);

           

            const alert = {
                msg: "Hubo un error",
                category: 'alerta-error'
            }
            
            dispatch({
                type: PROJECT_ERROR,
                payload: alert
            })
        }
    }




    return (
        <projectContext.Provider
            value={{
                projects: state.projects,
                formulario: state.formulario,
                errorform: state.errorform,
                project: state.project,
                messagel: state.message,
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