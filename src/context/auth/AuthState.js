import React, { useReducer } from 'react';
import { GET_USER, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, REGISTER_ERROR, REGISTER_SUCCESS } from '../../types';

import clientAxios from "../../config/axios";
import tokenAuth from '../../config/tokenAuth';

import authContext from "./AuthContext";
import authReducer from "./AuthReducer";


const AuthState = (props) => {

    const initiatState = {
        token: localStorage.getItem("tokenU"),
        auth: null,
        user: null,
        message: null,
        loading: true
    };

    const [state, dispatch] = useReducer(authReducer, initiatState);

    // Functiones 

    const registerUser = async (data) => {

        try {
            const response = await clientAxios.post('/api/users', data);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: response.data
            });

            userAuth();


        } catch (e) {
            console.log(e.response);

            const alert = {
                msg: e.response.data.msg,
                category: 'alerta-error'
            }

            dispatch({
                type: REGISTER_ERROR,
                payload: alert
            })
        }
    }

    // Retorna el usuario autenticado

    const userAuth = async () => {
        const token = localStorage.getItem('tokenU');

        if (token) {
            // Funciona para enviar token por headers
            tokenAuth(token);

            try {
                const response = await clientAxios.get('/api/auth');

                dispatch({
                    type: GET_USER,
                    payload: response.data.user
                })
            } catch (e) {
                console.log(e.response);
                dispatch({
                    type: LOGIN_ERROR
                })
            }
        }

    }


    const login = async data => {
        try {

        const response = await clientAxios.post('/api/auth', data);


        dispatch({
            type:LOGIN_SUCCESS,
            payload: response.data
        });

        userAuth();
            
        } catch (e) {
            console.log(e.response);

            const alert = {
                msg: e.response.data.msg,
                category: 'alerta-error'
            }

            dispatch({
                type: LOGIN_ERROR,
                payload: alert
            })
        }
    }

    // Cierra la sesion del usuario

    const logout = () =>{
        dispatch({
            type: LOGOUT
        })
    }

    return (
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                loading: state.loading,
                registerUser,
                login,
                userAuth, 
                logout
            }}
        >
            {props.children}
        </authContext.Provider>
    )

}


export default AuthState;
