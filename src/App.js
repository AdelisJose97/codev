import React from 'react';
import './App.css';
import { Home } from '../src/Pages/Home'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import routes from './routes'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {routes.map((route, i) => (
            <Route
              exact
              path={route.path}
              render={(props) => (
                <route.component></route.component>
              )}
            >

            </Route>
          ))}
        </Switch>
      </div>
    </Router>
  );
}

export default App;
