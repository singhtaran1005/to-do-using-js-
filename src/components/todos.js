import React from 'react'
import {Work} from "./work";


export const Todos = (props) => {
    return (
        <div className="container">
            
            {/* todos works */}
            <h3 className="text-center my-3">Todos List </h3>
            <Work todo={props.todos[0]}/>
            {/* {props.todos} */}
        </div>
    )
}
