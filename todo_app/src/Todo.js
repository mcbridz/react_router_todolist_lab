import React from 'react'

const Todo = (props) => {
    let text = props.text
    let date = props.date
    return (
        <li>
            <div>{text}</div>
            <div>{date}</div>
        </li>
    )
}

export default Todo
