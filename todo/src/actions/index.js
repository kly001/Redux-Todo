export const UPDATE_TODO = "UPDATE_TODO";
export const ADD_TODO = "ADD_TODO"

export function updateTodo(newTodo) {
    return {
        type: UPDATE_TODO,
        payload:newTodo
    }
}

export const addTodo = todoItem => {
    return{
        type:ADD_TODO,
        payload:todoItem
    }
}



