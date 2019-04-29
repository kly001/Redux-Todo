import {ADD_TODO, TOGGLE_TODO} from "../actions";

const initialState = {
    todos: [{
            task: " Swim with Sharks ",
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

            case TOGGLE_TODO:
            return {
        ...state,
        todos: state.todos.map((todo, index) =>
          action.payload === index
            ? { ...todo, completed: !todo.completed }
            : todo
        )
      };
            // This is another way of writing the above TOGGLE_TODO case:
            
            // case TOGGLE_TODO:
            // return {
            //     ...state,
            //     todos:state.todos.map((todo,index) => {
            //         if(index === action.payload) {
            //             return {
            //                 ...todo,
            //                 completed: !todo.completed
            //             }
            //         }
            //         return todo
            //     })
            // }

        default:
            return state;
    }
}
export default reducer