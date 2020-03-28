import React from 'react'

export default function Counts({todoItems}) {

    const appendStyle = () => {
        return (
        <span className={todoItems.length > 2 ? "red-text hoverable" : "green-text"}>Tasks Remaining : {todoItems.length}</span>
        )
    }
    

    return (
        <div className="left-align">
            {appendStyle()}
        </div>
    )
}
