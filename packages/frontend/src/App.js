import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Counter from './components/Counter';
import Todo from './pages/Todo';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Counter</Link>
          </li>
          <li>
            <Link to="/todo">Todo</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Counter} />
        <Route exact path="/todo" component={Todo} />
      </Switch>
    </Router>
  );
}

export default App;
