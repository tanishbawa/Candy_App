import './App.css';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './container/Home/Home';


<Route exact path="/" component={Home} />

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
