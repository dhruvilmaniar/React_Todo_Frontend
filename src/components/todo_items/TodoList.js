import React from 'react'
import Todo from './Todo'
import AddTodo from './AddTodo';

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
                isCompleted: true,
            },
            {
                id:3,
                task: "Complete AWP",
                isCompleted: true,
            }
        ]

    }

    addTodoItem = (item) => {
        item.id = Math.random()*100;
        let newTodos = [...this.state.todos,item];
        this.setState({
            todos : newTodos,
        })
        console.log(this.state.todos)
    }
    

    render() {

        return (
            <div>
                <Todo TodoListItems={this.state.todos}/>
                <AddTodo addTodo={this.addTodoItem} />
                {/* {console.log(this.state.todos)} */}
            </div>
        );
    }
}

export default TodoList;