import {
    ADD_PROJECT,
    FORM_PROJECT,
    GET_PROJECTS,
    VALIDATE_FORM,
    CURRENT_PROJECT,
    REMOVE_PROJECT,
    PROJECT_ERROR
} from '../../types';

export default (state, action) => {
    switch (action.type) {

        case FORM_PROJECT:
            return {
                ...state,
                formulario: true
            }
        case GET_PROJECTS:
            return {
                ...state,
                projects: action.payload
            }

        case ADD_PROJECT:
            return {
                ...state,
                projects: [action.payload, ...state.projects],
                formulario: false,
                errorform: false
            }

        case VALIDATE_FORM:

            return {
                ...state,
                errorform: true
            }

        case CURRENT_PROJECT:
            return {
                ...state,
                project: state.projects
                    .filter(project => project._id === action.payload._id)
            }

        case REMOVE_PROJECT:
            return {
                ...state,
                projects: state.projects
                    .filter(project => project._id !== action.payload),
                project: null
            }

        case PROJECT_ERROR:
            return {
                ...state, 
                message: action.payload
            }
            
        default:
            return state;
    }
}