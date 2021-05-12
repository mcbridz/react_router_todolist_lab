import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import All from './All'
import Todos from './Todos'
import Done from './Done'
function App() {
  const [todos, setTodos] = useState([])
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/todos' todos={todos} setTodos={setTodos}>Todos</Link>
            </li>
            <li>
              <Link to='/done'>Done</Link>
            </li>
            <li>
              <Link to='/all'>All</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path='/todos'>
            <Todos />
          </Route>
          <Route path='/done'>
            <Done />
          </Route>
          <Route path='/all'>
            <All />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
