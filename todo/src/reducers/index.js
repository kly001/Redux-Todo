import {ADD_TODO} from "../actions";

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
            const newTodo = {
                task: action.payload,
                id: Date.now(),
                completed: false,
            }
            return {
                ...state,
                todos:[...state.todos, newTodo]
            }
        default:
            return state;
    }
}
export default reducer