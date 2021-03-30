import React, { Fragment, useState, useContext } from 'react';
import projectContext from "../../context/projects/ProjectContext";

const CreateProject = () => {

    //Obtener el state del formuario del context

    const projectsContext = useContext(projectContext);

    const { formulario, errorform, showForm, addProject, showError } = projectsContext;


    // State para proyecto 
    const [project, setProject] = useState({
        nameP: ''
    });

    const onChangeProject = (e) => {
        setProject({
            ...project,
            [e.target.name]: e.target.value
        })
    }

    // Extraer el nombre del proyecto

    const { nameP } = project;


    const onSubmitProject = (e) => {
        e.preventDefault();

        // Validar el proyecto
        if (nameP === "") {
            showError();
            return;
        }
        // agregar al state 

        addProject(project);

        //Reiniciar el formulario

        setProject({
            nameP: ''
        })
    }

    // MOstrar el formulario

    const onClickForm = () => {
        showForm();
    }

    return (
        <Fragment>

            <button
                type="button"
                className="btn btn-block btn-primario"
                onClick={onClickForm}
            >
                Nuevo Proyecto
        </button>

            {
                formulario
                    ?
                    (<form
                        className="formulario-nuevo-proyecto"
                        onSubmit={onSubmitProject}
                    >
                        <input
                            type="text"
                            className="input-text"
                            placeholder="Nombre Proyecto"
                            name="nameP"
                            onChange={onChangeProject}
                            value={nameP}
                        />

                        <input
                            type="submit"
                            className="btn btn-primario btn-block"
                            value="Agregar Proyecto"
                        />
                    </form>) : null}

            {errorform ? <p className="mensaje error">El nombre del proyecto es obligatorio</p> : null}

        </Fragment>

    );
}

export default CreateProject;