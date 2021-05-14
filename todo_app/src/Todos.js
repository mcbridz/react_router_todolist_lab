import React, { useState } from 'react'
import Todo from './Todo'
import NewTodo from './NewTodo'

const markDone = (index, todoArr, key, displayArr, setTodos, setDisplayedTodos) => {
    // console.log(index + ' ' + key)
    // console.log(todoArr)
    // console.log(displayArr)
    todoArr[index].done = true
    displayArr[key].done = true
    setTodos(todoArr)
    setDisplayedTodos(displayArr)
}


const Todos = (props) => {
    let todos = props.todos
    let constTodos = props.todos
    let setTodos = props.setTodos
    let type = props.type
    const [displayedTodos, setDisplayedTodos] = useState([])
    if (type === 'Not Done') {
        todos = todos.filter((todo) => !todo.done)
    } else if (type === 'Done') {
        todos = todos.filter((todo) => todo.done)
    }
    setDisplayedTodos(todos)
    // console.log('TODOS COMPONENT')
    // console.log(todosCopy)
    return (
        <div>
            <h1>{(type) ? type : 'All'}</h1>
            <ul>
                {displayedTodos.map((todo, index) => {
                    return (<Todo
                        text={todo.text}
                        date={todo.date}
                        key={index}
                        id={todo.id}
                        markDone={markDone}
                        setTodos={setTodos}
                        todos={constTodos}
                        displayedTodos={displayedTodos}
                        setDisplayedTodos={setDisplayedTodos}
                        displayPosition={index}
                        done={todo.done} />)
                })}
            </ul>
            {(type === 'Not Done') ? <NewTodo
                todos={constTodos}
                setTodos={setTodos}
                displayedTodos={displayedTodos}
                setDisplayedTodos={setDisplayedTodos}
            /> : ''}
        </div>
    )
}

export default Todos
