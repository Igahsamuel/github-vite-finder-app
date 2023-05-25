const githubReducers = (state, action) => {
    switch(action.type){
        case 'GET_USERS' :
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case 'GET_USER_AND_REPOS':
            return {
            ...state,
            user: action.payload.user,
            repos: action.payload.repos,
            loading: false
            }
        case 'SET_LOADING':
            return {
                ...state,
                loading: true
                }
        case 'SET_CLEAR':
            return {
                 ...state,
                users: [],
                loading: false
                }
        default: 
        return state
    }
}

export default githubReducers