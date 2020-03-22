import React from 'react'
import Todo from './Todo'

class TodoList extends React.Component {
    state = {
        todos:[
            {
                id: 1,
                task: "Complete this app",
                isCompleted: false,
            },
            {
                id: 2,
                task: "Complete tssn",
                isCompleted: false,
            },
            {
                id:3,
                task: "Complete AWP",
                isCompleted: false,
            }
        ]

    }

    render() {

        return (
            <div>
                <Todo TodoListItems={this.state.todos}/>
            </div>
        );
    }
}

export default TodoList;