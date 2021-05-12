import React from 'react'
import { Work } from "./work";


export const Todos = (props) => {
    return (
        <div className="container">

            <h3 className="text-center my-3">Todos List </h3>

            {           
            //  document.write(props.todos.length),

              props.todos.length === 0 ? "No todos to display" :
                props.todos.map((todo) => {
                    return <Work todo={todo} key={todo.no} onDelete={props.onDelete} />
                })
                // )
            }

        </div>
    )
}
