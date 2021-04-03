import React, { useReducer } from 'react';

import uuid from 'uuid';

import todoContext from './TodoContext';
import todoReducer from './TodoReducer';

import {
    TODOS_PROJECT,
    ADD_TODO,
    VALIDATE_TODO,
    REMOVE_TODO,
    STATE_TODO,
    CURRENT_TODO
} from '../../types';

const TodoState = (props) => {




    const initialState = {
        todos: [
            { id: 1, nameT: "Elegir plataforma", state: true, projectId: 1 },
            { id: 2, nameT: "Elegir Escenario", state: false, projectId: 2 },
            { id: 3, nameT: "Elegir Metodo", state: true, projectId: 3 },
            { id: 4, nameT: "Elegir Camino", state: false, projectId: 4 },
        ],
        todosproject: null,
        errortodo: false,
        todoselected: null

    }

    const [state, dispatch] = useReducer(todoReducer, initialState);


    // Crear las funciones 

    // Obtener las tareas de un proyecto

    const getTodos = (projectId) => {
        dispatch({
            type: TODOS_PROJECT,
            payload: projectId
        })
    }

    // Agregar tarea

    const addTodo = (todo) => {
        dispatch({
            type: ADD_TODO,
            payload: todo
        })
    }

    // Valida y muestra un error de ser necesario

    const validateTodo = () => {
        dispatch({
            type: VALIDATE_TODO
        })
    }
    // Eliminar tarea por id

    const removeTodo = (id) => {
        dispatch({
            type: REMOVE_TODO,
            payload: id
        })
    }

    // Cambia el estado de cada tarea

    const updateStateTodo = (todo) => {
        dispatch({
            type: STATE_TODO,
            payload: todo
        });
    }

    // Extraer una tarea para la edicion

    const saveCurrentTodo = (todo) =>{
        dispatch({
            type: CURRENT_TODO,
            payload: todo
        })
    }
   


    return (
        <todoContext.Provider
            value={{
                todos: state.todos,
                todosproject: state.todosproject,
                errortodo: state.errortodo,
                getTodos,
                addTodo,
                validateTodo,
                removeTodo,
                updateStateTodo,
                saveCurrentTodo
            }}
        >
            {props.children}
        </todoContext.Provider>
    );




}

export default TodoState;