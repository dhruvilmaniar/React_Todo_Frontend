import React from 'react'

export default function Todo(props) {
        
    return (
        <div>
            {
                props.TodoListItems.map((item) => {
        
                    return item.isCompleted ? (
                        <div key={item.id}>
                            <p>Title : {item.task}</p>
                            <p>Id : {item.id}</p>
                        </div>
                    ) : null;
                }
                )
            
            }
        </div>
    )
}
