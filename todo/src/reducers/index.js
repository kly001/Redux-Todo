import {
    ADD_TODO
} from "../actions";

const initialState = {
    todos: [{
            task: "Swim with Sharks",
            completed: false,
            id: Date.now(),
        }
    ]
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todo: action.payload
            }
        default:
            return state;
    }
}
export default reducer