import * as actionType from './types';

const initialState = { isLoggedIn: false, user: null };

// reducer
export default function rootReducer(state = initialState, action) {
    const { type } = action;
    switch (type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return {
                ...state,
            };
        case actionType.GET_PRODUCTS_FAIL:
            return {
                ...state,
            };
        default:
            return state;
    }
} 