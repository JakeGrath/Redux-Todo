import React, { Component } from "react";
import { connect } from 'react-redux';
import  { add, toggle } from '../actions';

class ToDoForm extends Component {
    constructor() {
        super();
        this.state = {
            input: '',
        }
    }

    componentDidMount() {
        console.log(add)
        console.log(toggle)
    }

    handleChanges = e => {
        e.preventDefault();
        console.log(e.target.value)
        this.setState({
            input: e.target.value
        }) 
    }

    handleSubmit = e => {
        e.preventDefault();
        if (this.state.input !== ''){
        const newTodo = {
            value : this.state.input,
            completed: false
        }
        this.props.add(newTodo)
        this.setState({input: ''})
    }
    else {
        alert('Please enter some text!')
    }
}

    handleComplete = (e, index) => {
        e.preventDefault();
        this.props.toggle(index)
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <input onChange={this.handleChanges}
                    type='text'
                    value={this.state.input}
                    name='todo'
                    placeholder='Add Todo'
                />
                <button type='submit'>Add Todo</button>
            </form>
            <ul>
                {this.props.todos.map((todo, index) => {
                    return (
                        <li key={index}>{todo.value}{<button onClick={(e => this.handleComplete(e, index))}>Status: {((!todo.completed)? 'Not Completed' : 'Completed')}</button>}</li>
                    )
                })}

            </ul>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        todos: state.todos
    };
};

export default connect(mapStateToProps, { add, toggle })(ToDoForm);