const port = 8000
const todos_path = './todos.txt'

const app = require('./server')({ todosPath: todos_path })

app.listen(port)

console.log('server listening on port: ' + port + '...')