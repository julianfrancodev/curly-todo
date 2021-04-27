import { GET_USER, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT, REGISTER_ERROR, REGISTER_SUCCESS } from "../../types";



export default (state, action) => {

    switch (action.type) {

        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
            localStorage.setItem("tokenU", action.payload.token)
            return {
                ...state,
                auth: true,
                message: null,
                loading: false
            }


        case REGISTER_ERROR:
            return {
                ...state,
                token: null,
                message: action.payload,
                loading: false
            }
        case LOGOUT: 
        case LOGIN_ERROR:
            localStorage.removeItem("tokenU");
            return {
                ...state,
                token: null,
                user: null,
                auth: null,
                message: action.payload,
                loading: false
            }

        case GET_USER:
            return {
                ...state,
                user: action.payload,
                auth: true,
                loading: false
            }
        

        default:
            return state;
    }

}