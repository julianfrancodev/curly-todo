import { REGISTER_ERROR, REGISTER_SUCCESS } from "../../types";



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

        default:
            return state;
    }

}