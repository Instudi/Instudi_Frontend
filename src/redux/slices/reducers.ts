// reducers.js
import { LOGIN_SUCCESS, LOGOUT } from '../types';

const initialState = {
    hasAuth: localStorage.getItem('hasAuth') === 'true' ? true : false,
};

const authReducer = (state = initialState, action: { type: any; }) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem('hasAuth', 'true');
            return {
                ...state,
                hasAuth: true,
            };
        case LOGOUT:
            localStorage.setItem('hasAuth', 'false');
            return {
                ...state,
                hasAuth: false,
            };
        default:
            return state;
    }
};

export default authReducer;
