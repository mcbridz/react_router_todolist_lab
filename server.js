const express = require('express')
const fs = require('fs')
const cors = require('cors')

const app = express()

app.use(express.json())
app.use(cors())

module.exports = function (deps) {
    app.get('/todos_data', (req, res) => {
        // console.log('fetching todo json data')
        fs.readFile(deps.todosPath, (err, data) => {
            if (err) {
                return res.status(500).end('Error reading messages')
            }
            // console.log(JSON.parse(data))
            res.json(JSON.parse(data))
        })
    })
    app.post('/todos_data', (req, res) => {
        const todos = req.body
        // console.log(todos)
        fs.writeFile(deps.todosPath, JSON.stringify(todos), () => {
            res.end('todo data stored')
        })
    })
    app.post('/new_todo', (req, res) => {
        const newTodo = req.body
        // console.log('NEWTODO')
        // console.log(newTodo)
        fs.readFile(deps.todosPath, (err, data) => {
            if (err) {
                return res.status(500).end('Error reading messages')
            }
            let todo_data = JSON.parse(data)
            // console.log('Adding new todo to')
            // console.log(todo_data)
            todo_data = [...todo_data, newTodo]
            fs.writeFile(deps.todosPath, JSON.stringify(todo_data), () => {
                res.end('todo data stored')
            })
        })
    })

    const server = require('http').createServer(app)
    return server
}