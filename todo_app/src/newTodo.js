import React from 'react'

const newTodo = (props) => {
    let todos = props.todos
    let setTodos = props.setTodos
    const [newTodo, setNewTodo] = useState({
        text: '',
        date: new Date(),
        done: false
    })
    const handleSubmit = (evt) => {
        evt.preventDefault()
        //function for sending todo data
        //TO-CODE
        //
        setTodos({ ...todos, newTodo })
        setNewTodo({
            text: '',
            date: newDate(),
            done: false
        })
    }
    const handleChange = (evt) => {
        const value = evt.target.value
        setNewTodo({
            text: value,
            date: newDate(),
            done: false
        })
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    onChange={handleChange}
                    placeholder="Enter new todo"
                    value={newTodo.text}
                    name="newTodo"
                    id="newTodoInput"
                />
                <button onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    )
}

export default newTodo
