import React from 'react'
import Todo from './Todo'

const Todos = (props) => {
    let displayTodos = props.todos.filter((todo) => todo.done = false)
    let todos = props.todos
    let setTodos = props.setTodos
    return (
        <div>
            <h1>Todos</h1>
            <ul>
                {todos.map((todo, index) => {
                    <Todo text={todo.text} date={todo.date} />
                })}
            </ul>
            <newTodo todos={todos} setTodos={setTodos} />
        </div>
    )
}

export default Todos
