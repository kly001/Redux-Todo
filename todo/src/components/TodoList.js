import React from "react";
import {connect} from "react-redux";

const TodoList = props => {
    return(
        <> 
        <div className ="todo-list">
            {props.todoList.map(todo => (
                <h4 key={todo.id}>
            {todo.task}
                </h4>
            ))}
          </div>  
        </>  
    )
}

const mapStateToProps = state => {
    return {
        todoList: state.todos
    }
}
   
export default connect(mapStateToProps,
  {}  )(TodoList)