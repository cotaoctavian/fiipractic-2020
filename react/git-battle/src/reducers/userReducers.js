const initialState = {
    users: [], 
    loading: true
}

const userReducers = (state = initialState, action) => {
    switch(action.type) {
        case 'ADD_USER':
            const newState = {...state};
            newState.users.push(action.payload);
            return newState;
        case 'REMOVE_USER':
            return state;
        default: 
            return state;
    }
}

export default userReducers;