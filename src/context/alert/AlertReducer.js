import { HIDE_ALERT, SHOW_ALERT } from "../../types";


export default (state, action) =>{
    switch(action.type){

        case SHOW_ALERT:
            return {
                ...state,
                alert: action.payload
            }
        case HIDE_ALERT: 
            return {
                ...state,
                alert: false
            }

        default: 
         return state;
    }
}