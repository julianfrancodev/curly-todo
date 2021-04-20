import React, { useReducer } from 'react';
import { GET_USER, LOGIN_ERROR, REGISTER_ERROR, REGISTER_SUCCESS } from '../../types';

import clientAxios from "../../config/axios";
import tokenAuth from '../../config/tokenAuth';

import authContext from "./AuthContext";
import authReducer from "./AuthReducer";


const AuthState = (props) => {

    const initiatState = {
        token: localStorage.getItem("tokenU"),
        auth: null,
        user: null,
        message: null
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

        console.log(token);
        if (token) {
            // Funciona para enviar token por headers
            tokenAuth(token);

            try {
                const response = await clientAxios.get('/api/auth');

                // console.log(response);

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

        console.log(response);
            
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

    return (
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                registerUser,
                login
            }}
        >
            {props.children}
        </authContext.Provider>
    )

}


export default AuthState;
