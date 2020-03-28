import React from 'react'

export default function notFound(props) {

    setTimeout(() => {
        props.history.push('/')
    }, 3000)

    
    return (
        <div>
            <h4>404. That's an error.</h4>
            <p>Redirecting you to the home page...</p>
        </div>
    )
}
