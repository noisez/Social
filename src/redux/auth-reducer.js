import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

export const setAuthUserData = (id, login, email, isAuth) => ({type: SET_USER_DATA, payload: {id, login, email, isAuth}});

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch(action.type) {

        case SET_USER_DATA: {
            return {
                ...state,
                ...action.payload
            };
        }

        default:
            return state;
    }
};

export const checkUserAuth = () => {
    return (dispatch) => {
        (
            authApi.checkUserAuth().then( data => {
                if (data.resultCode === 0) {
                    dispatch(setAuthUserData(data.data.id, data.data.login, data.data.email, true));
                }
            } )
        )
    }
};

export const login = (email, password, rememberMe) => (dispatch) => {
    authApi.login(email, password, rememberMe).then(response => {
        if (response.data.resultCode === 0) {
            dispatch(checkUserAuth());
        }
    })
};

export const logout = () => (dispatch) => {
    authApi.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
};

export default authReducer;

