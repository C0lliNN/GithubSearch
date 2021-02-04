import { Route, Switch } from 'react-router';
import './App.css';
import Home from './pages/Home';
import User from './pages/User';

function App() {
  return (
    <main className="App">
      <Switch>
        <Route path="/users/:user" component={User} />
        <Route path="/" component={Home} />
      </Switch>
    </main>
  );
}

export default App;
