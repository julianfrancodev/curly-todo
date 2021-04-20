import { GET_USER, LOGIN_ERROR, REGISTER_ERROR, REGISTER_SUCCESS } from "../../types";



export default (state, action) => {

    switch (action.type) {

        case REGISTER_SUCCESS:
            localStorage.setItem("tokenU", action.payload.token)
            return {
                ...state,
                auth: true,
                message: null
            }


        case REGISTER_ERROR:
            return {
                ...state,
                token: null,
                message: action.payload
            }
        case LOGIN_ERROR:
            localStorage.removeItem("tokenU");
            return {
                ...state,
                token: null,
                message: action.payload
            }

        case GET_USER:
            return {
                ...state,
                user: action.payload
            }

        default:
            return state;
    }

}