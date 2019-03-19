const initialState = {
    num: 0,
    data: null,
    error: ""
}

const reducer = (state = initialState, { type, data, error }) => {
    switch (type) {
        case "INCREMENT":
            return {
                ...state,
                num: state.num + 1
            }
        case "DECREMENT":
            return {
                ...state,
                num: state.num - 1
            }

        case "FETCH_DATA":
            return {
                ...state,
                data: data
            }

        case "ERROR":
            return {
                ...state,
                error
            }
        default:
            return state
    }
}

export default reducer