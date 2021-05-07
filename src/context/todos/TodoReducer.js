
import {
    TODOS_PROJECT,
    ADD_TODO,
    VALIDATE_TODO,
    REMOVE_TODO,
    STATE_TODO,
    CURRENT_TODO,
    UPDATE_TODO,
    CLEAN_TODO
} from '../../types';


export default (state, action) => {
    switch (action.type) {

        case TODOS_PROJECT:
            return {
                ...state,
                todosproject: action.payload
            }
        case ADD_TODO:
            return {
                ...state,
                todosproject: [action.payload,...state.todosproject],
                errortodo: false
            }
        case VALIDATE_TODO:
            return {
                ...state,
                errortodo: true
            }
        case REMOVE_TODO: 
            return{
                ...state,
                todosproject: state.todosproject.filter(todo => todo.id !== action.payload)
            }
        case UPDATE_TODO: 
        case STATE_TODO: 
            return {
                ...state,
                todosproject: state.todosproject.map(todo => todo.id === action.payload.id ? action.payload : todo),
                
            }
        case CURRENT_TODO: 
            return {
                ...state,
                todoselected: action.payload
            }
        case CLEAN_TODO:
            return {
                ...state,
                todoselected: null
            }
  
        default:
            return state;
    }
}