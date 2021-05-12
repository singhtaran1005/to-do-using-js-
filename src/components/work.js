import React from 'react'

export const Work = ({todo}) => {
    return (
        <div>
                <h4>{todo.no}</h4>
                <h4>{todo.title}</h4>
                <button className="btn-danger">DELETE</button>
        </div>
    )
}
