import React from 'react'
import TodoList from './components/todo_items/TodoList'

class App extends React.Component {
    state = {}

    render() {
        return (
            <React.Fragment>
                <p>This is from app.js</p>
                <TodoList />
            </React.Fragment>
        )
    }
}

export default App;