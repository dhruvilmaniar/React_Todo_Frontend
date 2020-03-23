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

    addTodoItem = (newItemObj) => {
        newItemObj.id = Math.random()*100;
        let newStateList = [...this.state.todos, newItemObj];
        this.setState({
            todos : newStateList,
        })
    }
    
    deleteTodoItem = (id) => {
        let newItems = this.state.todos.filter((items) => {
            return items.id !== id;
        }
        )
        this.setState({
            todos: newItems,
        })
    }
    

    render() {

        return (
            <div>
                <Todo deleteTodoItem={this.deleteTodoItem} TodoListItems={this.state.todos}/>
                <AddTodo addTodo={this.addTodoItem} />
                {/* {console.log(this.state.todos)} */}
            </div>
        );
    }
}

export default TodoList;