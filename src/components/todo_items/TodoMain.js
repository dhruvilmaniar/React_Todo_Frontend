import React from 'react'
import TodoList from './TodoList'
import AddTodo from './AddTodo'
import Counts from './TodoCounts'
import { connect } from 'react-redux'

class TodoMain extends React.Component {

    deleteTodo = (id) => {
        let todos = this.props.todos.filter((item) => {
            return item.id !== id;
        }
        )
        console.log("Not - selected Todo : " + todos.content)
        // this.setState({
        //     todos: todos,
        // })
        console.log(this.props)
    }

    addTodo = (todo) => {
        todo.id = Math.round(Math.random()*100);
        let todos = [...this.props.todos,todo];
        this.setState({todos:todos});
    }
    
    render() {
        return (
            <div className="todo-app container">
                <h1 className="center blue-text">Todo List</h1>
                <Counts todoItems = {this.props.todos} />
                <TodoList todoItems={this.props.todos} deleteTodo={this.deleteTodo} />
                <AddTodo addTodo = {this.addTodo} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        todos: state.todos,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        deleteTodo: (id) => {dispatch(deleteTodo(id))}
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(TodoMain);