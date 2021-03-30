import React, { Fragment } from 'react';
import Todo from './Todo';


const TodosList = () => {

    const tareas = [
        { name: "Elegir plataforma", state: true },
        { name: "Elegir Escenario", state: false },
        { name: "Elegir Metodo", state: true },
        { name: "Elegir Camino", state: false },
    ]

    return (
        <Fragment>
            <h2>
                Proyecto: Tienda Mac
            </h2>

            <ul className="listado-tareas">
                {tareas.length === 0 ? (
                    <li className="tarea"><p>No hay tareas</p></li>
                ) : tareas.map(todo => <Todo todo={todo}/>)}
            </ul>

            <button
            type="button"
            className="btn btn-eliminar"
            >
                Eliminar Proyecto &times;
            </button>
        </Fragment>
    );
}

export default TodosList;