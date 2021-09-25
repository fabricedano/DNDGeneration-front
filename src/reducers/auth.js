//import { SET_CURRENT_USER } from "../actions/types"


export const initialState = {
    isAuthenticated: false,
    user: {},
};

export function authReducer(state = initialState, action) {
    /*switch (action.type) {
        case 'SET_CURRENT_USER': {
            return { ...state, isAuthenticated: true , user: action.payload };
        }
        case 'LOGOUT': {
            return { isAuthenticated: false, user: null };
        }
        default:
            return state;
    }*/
}