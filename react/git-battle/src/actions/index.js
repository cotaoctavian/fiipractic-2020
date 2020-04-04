export const increment = () => {
    return {
        type: 'increment'
    }
}

export const decrement = () => {
    return {
        type: 'decrement'
    }
}

export const incrementAsync = () => {
    return (dispatch) => {
        dispatch(increment())
    }
}

export const decrementAsync = () => {
    return (dispatch) => {
        dispatch(decrement());
    }
}

export const addUser = (user) => {
    return {
        type: 'ADD_USER',
        payload: user
    }
}

