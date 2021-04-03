
import {
    TODOS_PROJECT,
    ADD_TODO,
    VALIDATE_TODO,
    REMOVE_TODO,
    STATE_TODO,
    CURRENT_TODO
} from '../../types';


export default (state, action) => {
    switch (action.type) {

        case TODOS_PROJECT:
            return {
                ...state,
                todosproject: state.todos.filter(todo => todo.projectId === action.payload),
            }
        case ADD_TODO:
            return {
                ...state,
                todos: [action.payload,...state.todos],
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
                todos: state.todos.filter(todo => todo.id !== action.payload)
            }

        case STATE_TODO: 
            return {
                ...state,
                todos: state.todosproject.map(todo => todo.id === action.payload.id ? action.payload : todo)
            }
        case CURRENT_TODO: 
            return {
                ...state,
                
            }
        default:
            return state;
    }
}