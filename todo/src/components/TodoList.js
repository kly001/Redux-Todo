import React from "react";
import {connect} from "react-redux";

const TodoList = props => {
    return(
        <>
        <div className = "todoList">
            {}
        </div>
        </>
    )
}

const mapStateToProps = state => {
    return {
        todosList: state.todoObjects
    }
}
   
export default connect(mapStateToProps,
  {}  )(TodoList)