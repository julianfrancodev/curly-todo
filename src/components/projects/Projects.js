import React, { useContext, useEffect } from 'react'
import Header from '../layout/Header';
import SideBar from '../layout/Sidebar';
import FormTodo from '../todos/FormTodo';
import TodosList from '../todos/TodosList';

import authContext from '../../context/auth/AuthContext';

const Projects = () => {

    const authsContext = useContext(authContext);

    const { userAuth } = authsContext;


    useEffect(() => {
       userAuth();
    }, [])



    return (
        <div className="contenedor-app">
            <SideBar />
            <div className="seccion-principal">

                <Header />
                <main>
                    <FormTodo />

                    <div className="contenedor-tareas">
                        <TodosList />
                    </div>
                </main>
            </div>
        </div>
    );
}

export default Projects;