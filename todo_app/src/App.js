import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'
import Todos from './Todos'
function App() {
  const [todos, setTodos] = useState([])
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to='/todos'>Todos</Link>
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
            <Todos type='Not Done' todos={todos} setTodos={setTodos} />
          </Route>
          <Route path='/done'>
            <Todos type='Done' todos={todos} setTodos={setTodos} />
          </Route>
          <Route path='/all'>
            <Todos type='' todos={todos} setTodos={setTodos} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
