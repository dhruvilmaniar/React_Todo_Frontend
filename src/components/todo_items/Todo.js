import React, { Component } from 'react'

export default class Todo extends Component {
    render() {

        const { TodoListItems } = this.props;
        
        const TodoList = TodoListItems.map((items) => {

            return (
                <div key={items.id}>
                    <p>Task : {items.task}</p>
                    <p>id : {items.id}</p>
                </div>
            )
        })
        
        
        return (
            <div>
                <div>{TodoList}</div>
            </div>
        )
    }
}
