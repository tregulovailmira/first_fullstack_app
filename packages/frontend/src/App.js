import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Counter from './components/Counter';

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Counter</Link>
          </li>
        </ul>
      </nav>
      <Switch>
        <Route exact path="/" component={Counter} />
      </Switch>
    </Router>
  );
}

export default App;
