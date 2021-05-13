import React from 'react'
import { Work } from "./work";


export const Todos = (props) => {
    let myStyle = {
        minHeight: "70vh",
        margin: "30px auto"
    }
    return (
        <div className="container" style={myStyle}>

            <h3 className=" my-3">Todos List </h3>

            {
                //  document.write(props.todos.length),

                props.todos.length === 0 ? "No todos to display" :
                    props.todos.map((todo) => {
                        return (
                            <>
                                <Work todo={todo} key={todo.no} onDelete={props.onDelete} />
                                <hr/>

                            </>)
                    })
                // )
            }

        </div >
    )
}
