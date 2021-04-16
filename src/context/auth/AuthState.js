import React, { useReducer } from 'react';

import authContext from "./AuthContext";
import authReducer from "./AuthReducer";


const AuthState = (props) => {

    const initiatState ={
        token: localStorage.getItem("tokenU"),
        auth: null,
        user: null,
        message: null
    };

    const [state, dispatch] = useReducer(authReducer, initiatState);

    // Functiones 

    return (
        <authContext.Provider
            value={{
                token : state.token,
                auth: state.auth,
                user: state.user,
                message: state.message
            }}
        >
            {props.children}
        </authContext.Provider>
    )

}


export default AuthState;
