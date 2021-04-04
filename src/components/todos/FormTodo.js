import React, { useContext, useState, useEffect } from 'react';
import projectContext from "../../context/projects/ProjectContext";
import todoContext from "../../context/todos/TodoContext";

const FormTodo = () => {

    const projectsContext = useContext(projectContext);
    const todosContext = useContext(todoContext);

    const { project } = projectsContext;
    const { errortodo, todoselected, addTodo, validateTodo, 
        getTodos, updateTodo, cleanTodo } = todosContext;



    const [todo, setTodo] = useState({
        nameT: ''
    });


    // Effect que detecta si hay uan tarea seleccionada

    useEffect(() => {
        if (todoselected !== null) {
            setTodo(todoselected)
        } else {
            setTodo({
                nameT: ''
            })
        }
    }, [todoselected])

    // Leer los valores del formulario

    const handleChange = e => {
        setTodo({
            ...todo,
            [e.target.name]: e.target.value
        })
    }

    if (!project) return null;


    const onSubmit = (e) => {
        e.preventDefault();

        // validar

        if (todo.nameT.trim() === "") {
            validateTodo();
            return;
        }


        // Revisar si es edicion o es una nueva tarea

        if (todoselected === null) {
            // Agregamos nueva tarea al state de tareas
            todo.projectId = project[0].id;
            todo.state = false;

            addTodo(todo);
        }else{
            // Actualizar la tarea existente

            updateTodo(todo);

            // Eliminar la tarea seleccionada del state

            cleanTodo();

        }

        // Obtener las tareas de un proyecto

        getTodos(project[0].id);

        // reiniciar el formulario

        setTodo({
            nameT: ''
        })
    }

    return (
        <div className="formulario">
            <form
                onSubmit={onSubmit}
            >
                <div className="contenedor-input">
                    <input
                        type='text'
                        className='input-text'
                        placeholder='Nombre Tarea...'
                        name='nameT'
                        value={todo.nameT}
                        onChange={handleChange}
                    />
                </div>

                <div className="contenedor-input">
                    <input
                        type='submit'
                        className='btn btn-primario btn-submit btn-block'
                        value={todoselected ? 'Actualizar Tarea' : 'Agregar Tarea'}
                    />
                </div>
            </form>

            {errortodo ? <p className="mensaje error">El nombre de la tarea es obligatorio</p> : null}
        </div>
    );
}

export default FormTodo;