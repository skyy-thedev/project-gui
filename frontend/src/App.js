import './App.css';
import Inicio from './pages/home.jsx';
import Dashboard from './pages/dashboard.jsx';
import { Router, Route, Switch } from "wouter";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Inicio} />
        <Route path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
}

export default App;