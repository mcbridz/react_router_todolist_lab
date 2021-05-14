import React from 'react'


const Todo = (props) => {
    let text = props.text
    let date = props.date
    // console.log(date)
    let id = props.id
    let markDone = props.markDone
    let todos = props.todos
    // console.log('todos')
    // console.log(todos)
    let setTodos = props.setTodos
    let displayPosition = props.displayPosition
    let displayTodos = props.displayedTodos
    let setDisplayedTodos = props.setDisplayedTodos
    // console.log('displayTodos')
    // console.log(displayTodos)
    return (
        <li>
            <div>{text}{(props.done) ? '' : <button onClick={() => markDone(id, todos, displayPosition, displayTodos, setTodos, setDisplayedTodos)}>Done</button>}</div>
            <div>{date.toString()}</div>
        </li>
    )
}

export default Todo
