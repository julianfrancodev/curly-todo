import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom';

import alertContext from "../../context/alert/AlertContext";

const CreateAccount = () => {

    const alertsContext = useContext(alertContext);


    const { alert, showAlert } = alertsContext;




    // State para iniciar sesion

    const [user, setUser] = useState({
        nameU: '',
        email: '',
        password: '',
        confirmar: ''
    });

    // extraer el usuario y el password

    const { email, password, nameU, confirmar } = user;

    const onChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault();


        // Validar los campos vacios

        if(nameU.trim() === "" || email.trim() || password.trim() ||
            confirmar.trim() === ""){
                showAlert("Todos los campos son obligatorios", 'alerta-error')
                return;
            }
        // validar que el password minimo se de 6 caracteres 

            if(password.length < 6){
                showAlert("El password debe ser de minimo 6 caracteres", "alerta-error");
                return;
            }


        // validar que los dos passwords sean iguales

        if( password !== confirmar){
            showAlert("El password debe ser de minimo 6 caracteres", "alerta-error");
            return;
        }

        // Pasar al action
    }

    return (
        <div className="form-usuario">

            {alert ?
                (<div className={`alerta ${alert.category}`}>
                    {alert.msg}
                </div>)
                : null}
            <div className="contenedor-form sombra-dark">
                <h1>Crea una cuenta</h1>

                <form onSubmit={onSubmit}>

                    <div className="campo-form">
                        <label htmlFor="name">Nombre</label>

                        <input
                            type="text"
                            id="nameU"
                            name="nameU"
                            placeholder="Tu Nombre"
                            value={nameU}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="email">Email</label>

                        <input
                            type="email"
                            id="email"
                            name="email"
                            placeholder="Tu Email"
                            value={email}
                            onChange={onChange}
                        />
                    </div>
                    <div className="campo-form">
                        <label htmlFor="password">Password</label>

                        <input
                            type="password"
                            id="password"
                            name="password"
                            placeholder="Tu Password"
                            value={password}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <label htmlFor="confirmar">Confirmar</label>

                        <input
                            type="password"
                            id="confirmar"
                            name="confirmar"
                            placeholder="Confirma tu Password"
                            value={confirmar}
                            onChange={onChange}
                        />
                    </div>

                    <div className="campo-form">
                        <input type="submit" className="btn btn-primario btn-block" value="Crear Cuenta" />
                    </div>
                </form>
                <Link to={'/'} className='enlace-cuenta'>
                    Iniciar Sesion
                </Link>
            </div>
        </div>
    );
}

export default CreateAccount;