import React from "react";
import {connect} from "react-redux";

import{addTodo} from "../actions"

class TodoList extends React.Component  {
    state = {
        newTodo:"",
    }

    handleChange = event =>{
        this.setState({newTodo:event.target.value})
    }

    addTodo = event => {
        event.preventDefault();
        this.props.addTodo(this.state.newTodo)
        this.setState({newTodo:""})
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
            name="newTodo"
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder="New Todo"
            />
          <button onClick={this.addTodo}>Submit</button>     
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
  {addTodo})(TodoList)