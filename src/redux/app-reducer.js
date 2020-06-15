import {getAuthUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS';
const TOGGLE_NAV_COLLAPSED = 'TOGGLE_NAV_COLLAPSED';

let initialState = {
    initialized: false,
    navCollapsed: false,
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {...state, initialized: true};
        case TOGGLE_NAV_COLLAPSED:
            return {...state, navCollapsed: action.navCollapsed};
        default:
            return state;
    }
};

export const initializedSuccess = () => ({type: INITIALIZED_SUCCESS});
export const toggleNavCollapsed = (navCollapsed) => ({type: TOGGLE_NAV_COLLAPSED, navCollapsed});

export const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    Promise.all([promise])
        .then(() => {
            dispatch(initializedSuccess());
        });

};

export default appReducer;