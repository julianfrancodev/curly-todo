import { REGISTER_ERROR } from "../../types";



export default (state, action) => {

    switch (action.type) {

        case REGISTER_ERROR:
            return state;

        default:
            return state;
    }

}