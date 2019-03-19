import axios from 'axios';

export const increment = () => {
    return {
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return {
        type: "DECREMENT"
    }
}

export const fetched = (data) => {
    return {
        type: "FETCH_DATA",
        data
    }
}

export const fetchFailed = (err) => {
    return {
        type: 'ERROR',
        msg: err
    }
}


// Asynchronous
export const fetchData = () => {
    let url = "https://jsonplaceholder.typicode.com/todos/2";
    return dispatch => {
        console.log('redux thunk fetchData is running >>>');
        return axios.get(url)
            // .then(response => response.json())
            .then(json => dispatch({ type: "FETCH_DATA", data: json }))
            .catch(err => dispatch({ type: "ERROR", msg: err }))
    }
}