import React from 'react'

export default function TodoList({todoItems, deleteTodo}) {

    const createJSX =  todoItems.length ? (
        todoItems.map((item, index) => {
            return (
                <div onClick={() => {deleteTodo(item.id)}} className="collection-item lime lighten-5" key={item.id}>
                    <span ><span className="badge left">{index+1}</span> {item.content} </span>
                </div>
            )
        }
    )) : (<p className="center">You do not have anything left! Enjoy!</p>)


    return (
        <div className="todos collection">
            {createJSX}
        </div>
    )
}
