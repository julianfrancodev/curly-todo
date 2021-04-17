import React, { useReducer } from 'react';
import { REGISTER_ERROR, REGISTER_SUCCESS } from '../../types';

import clientAxios from "../../config/axios";

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

    return (
        <authContext.Provider
            value={{
                token: state.token,
                auth: state.auth,
                user: state.user,
                message: state.message,
                registerUser
            }}
        >
            {props.children}
        </authContext.Provider>
    )

}


export default AuthState;
