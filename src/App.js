import React from 'react'
import TodoList from './components/todo_items/TodoList'
import AddTodo from './components/todo_items/AddTodo'
import Counts from './components/Counts'

class App extends React.Component {
    state = {
        todos: [
            {id:1, content:"Complete this App!"},
            {id:2, content:"Complete TSSN!"},
        ]
    }

    deleteTodo = (id) => {
        let todos = this.state.todos.filter((item) => {
            return item.id !== id;
        }
        )
        this.setState({
            todos: todos,
        })
    }

    addTodo = (todo) => {
        todo.id = Math.round(Math.random()*10000);
        let todos = [...this.state.todos,todo];
        this.setState({todos:todos});
    }
    



    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo List</h1>
                <Counts todoItems = {this.state.todos} />
                <TodoList todoItems={this.state.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo = {this.addTodo} />
            </div>
        )
    }
}

export default App;