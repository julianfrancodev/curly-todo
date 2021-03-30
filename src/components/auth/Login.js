import React, {useState} from 'react'
import {Link} from 'react-router-dom';

const Login = () => {

    // State para iniciar sesion

    const [user, setUser] = useState({
        email: '',
        password: ''
    });

    // extraer el usuario y el password

    const {email, password} = user;

    const onChange = (e)=>{
        setUser({
            ...user,
            [e.target.name] : e.target.value
        })
    }

    const onSubmit =(e)=>{
        e.preventDefault();


        // Validar los campos vacios

        // Pasar al action
    }

    return ( 
        <div className="form-usuario">
            <div className="contenedor-form sombra-dark">
                <h1>Iniciar Sesion</h1>

                <form onSubmit={onSubmit}>
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
                        <input type="submit" className="btn btn-primario btn-block" value="Iniciar Sesion"/>
                    </div>
                </form>
                <Link to={'/create-account'} className='enlace-cuenta'>
                    Crear Cuenta
                </Link>
            </div>
        </div>
     );
}
 
export default Login;