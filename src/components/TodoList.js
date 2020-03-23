import React from 'react'

export default function TodoList({todoItems, deleteTodo}) {

    const createJSX =  todoItems.length ? (
        todoItems.map((item) => {
            return (
                <div className="collection-item" key={item.id}>
                    <span onClick={() => {deleteTodo(item.id)}}> {item.content} </span>
                </div>
            )
        }
        )
    ) : (
        <p className="center">You do not have anything left! Enjoy!</p>
    )


    return (
        <div className="todos collection">
            {createJSX}
        </div>
    )
}
