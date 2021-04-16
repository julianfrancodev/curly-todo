import React, { useReducer } from 'react';
import { HIDE_ALERT, SHOW_ALERT } from '../../types';

import alertContext from "./AlertContext";
import alertReducer from "./AlertReducer";



const AlertState = props => {


    // Crear state incial para las alertas

    const initialState = {
        alert: false
    }

    // Dispatch que crea la comunacion con el reducer y ejecutar las acciones
    const [state, dispatch] = useReducer(alertReducer, initialState);

    // Funaciones para las alertas


    const showAlert = (msg, category) => {
        dispatch({
            type: SHOW_ALERT,
            payload: {
                msg,
                category
            }
        });

        setTimeout(() => {
            dispatch({
                type: HIDE_ALERT
            })
        }, 3000);
    }

    return (
        <alertContext.Provider
            value={{
                alert: state.alert,
                showAlert
            }}
        >
            {props.children}
        </alertContext.Provider>
    );

}

export default AlertState;