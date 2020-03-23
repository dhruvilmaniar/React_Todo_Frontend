import React from 'react'

export default function Todo({TodoListItems, deleteTodoItem}) {
        
    return (
        <div>
            {
                TodoListItems.map((item) => {
        
                    return item.isCompleted ? (
                        <div key={item.id}>
                            <p>Title : {item.task}</p>
                            <p>Id : {item.id}</p>
                            <button id="deleteItem" onClick={() => {deleteTodoItem(item.id)}}>Delete</button>
                        </div>
                    ) : null;
                }
                )
            
            }
        </div>
    )
}
