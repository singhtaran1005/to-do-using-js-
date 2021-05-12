import React from 'react'

export const Work = ({ todo, onDelete }) => {
    return (
        <div>
            <ul>
                <h1>{todo.no} . {todo.title}</h1>
            </ul>
            <button className="btn-danger" onClick={() => { onDelete(todo) }}>DELETE</button>
        </div>
    )
}



//ondelete function passing