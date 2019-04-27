import React from "react";
import {connect} from "react-redux";

import{addTodo, toggleTodo} from "../actions"

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

    toggleTodo = (id) => {
        this.props.toggleTodo(id);
    }

    render() {
      return(
        <> 
        <div className ="todo-list">
            {this.props.todoList.map((todo,id) => (
                <h4 onClick = {event => this.toggleTodo(event,id)} key={todo.id}>
                    {todo.task}
                </h4>
            ))}
        </div>  
          <input
            type="text"
            name="newTodo"
            value={this.state.newTodo}
            onChange={this.handleChange}
            placeholder="Add New Todo Here"
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
  {addTodo, toggleTodo})(TodoList)