import React, { useReducer } from 'react';

import todoContext from './TodoContext';
import todoReducer from './TodoReducer';

import clientAxios from '../../config/axios';

import {
    TODOS_PROJECT,
    ADD_TODO,
    VALIDATE_TODO,
    REMOVE_TODO,
    STATE_TODO,
    CURRENT_TODO,
    UPDATE_TODO,
    CLEAN_TODO
} from '../../types';

const TodoState = (props) => {

    const initialState = {
        todosproject: [],
        errortodo: false,
        todoselected: null

    }

    const [state, dispatch] = useReducer(todoReducer, initialState);


    // Crear las funciones 

    // Obtener las tareas de un proyecto

    const getTodos = async (project) => {

        try {
            const result  = await clientAxios.get('/api/todos', {params: {project}});
            console.log(result)
            dispatch({
                type: TODOS_PROJECT,
                payload: result.data.todos
            })

        } catch (e) {
            console.log(e.response);
        }

       
    }

    // Agregar tarea

    const addTodo = async (todo) => {
        console.log(todo);
        
        try {

            const response = await clientAxios.post('/api/todos', todo);

            console.log(response);

            dispatch({
                type: ADD_TODO,
                payload: response.data.todo
            })
            
        } catch (e) {
            console.log(e.response);
        }

        
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

    // Editar una tarea

    const updateTodo = todo =>{
        dispatch({
            type: UPDATE_TODO,
            payload: todo
        })
    }

    // Eliminar todoselected

    const cleanTodo =()=>{
        dispatch({
            type: CLEAN_TODO
        })
    }
   


    return (
        <todoContext.Provider
            value={{
                todosproject: state.todosproject,
                errortodo: state.errortodo,
                todoselected: state.todoselected,
                getTodos,
                addTodo,
                validateTodo,
                removeTodo,
                updateStateTodo,
                saveCurrentTodo,
                updateTodo,
                cleanTodo
            }}
        >
            {props.children}
        </todoContext.Provider>
    );




}

export default TodoState;