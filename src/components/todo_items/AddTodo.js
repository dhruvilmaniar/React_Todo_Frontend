import React, { Component } from 'react'

export default class AddTodo extends Component {

    // const { addTodoItem }

    state = {
        id: null,
        task: null,
        isCompleted: null,
    }

    handleChange = (e) => {
        this.setState({[e.target.id] : e.target.value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addTodo(this.state);
    }
    
    
    
    render() {

        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="task">Task:</label>
                    <input type="text" id="task" onChange={this.handleChange} />
                    <br />
                    <br />
                    <label htmlFor="isCompleted">Complete:</label>
                    <input type="text" id="isCompleted" onChange={this.handleChange} />
                    <br />
                    <br />
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
