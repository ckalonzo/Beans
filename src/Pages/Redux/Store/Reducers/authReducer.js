const initState = {
    authError: null,
    resetPassword: false,
    loginSuccess: false
}

const authReducer = (state = initState, action) => {
    switch (action.type) {
        case 'RESET_EMAIL_LINK_SENT':
            return {
                ...state,
                authError: action.authError,
                resetPassword: true,
            }
        case 'RESET_EMAIL_LINK_SENT_FAIL':
            return {
                ...state,
                authError: action.authError,
            }
        case 'LOGIN_ERROR':
            console.log('login error');
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError: null,
                loginSuccess: true
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout success');
            return state

        case 'SIGNUP_SUCCESS':
            console.log('signup success')
            return {
                ...state,
                authError: null
            }

        case 'SIGNUP_ERROR':
            console.log('signup error')
            return {
                ...state,
                authError: action.err.message
            }
        case 'FETCH_USER_SUCCESS':
            return {
                ...state
            }
        case 'FETCH_USER_FAIL':
            return {
                ...state
            }
        default:
            return state
    }
};


export default authReducer;