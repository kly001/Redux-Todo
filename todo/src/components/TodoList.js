import React from "react";
import {connect} from "react-redux";

class TodoList extends React.Component  {
    state = {
        newTodo:"",
    }

    handleChange = event =>{
        this.setState({newTodo:event.target.value})
    }
    render() {
    return(
        <> 
        <div className ="todo-list">
            {this.props.todoList.map(todo => (
                <h4 key={todo.id}>
            {todo.task}
                </h4>
            ))}
          </div>  
          <input
          type="text"
          value={this.state.newTodo}
          onChange={this.handleChange}
          placeholder="Add New Todo"
          />
          <button>Add Todo</button>


          
        </>  
    )
}
}

const mapStateToProps = state => {
    return {
        todoList: state.todos
    }
}
   
export default connect(mapStateToProps,
  {}  )(TodoList)