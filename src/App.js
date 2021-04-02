import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateAccount from './components/auth/CreateAccount';
import Login from './components/auth/Login';
import Projects from './components/projects/Projects';

import ProjectState from "./context/projects/ProjectState";
import TodoState from "./context/todos/TodoState";

function App() {
  return (
    <ProjectState>
      <TodoState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/create-account" component={CreateAccount} />
            <Route exact path="/projects" component={Projects} />
          </Switch>
        </Router>
      </TodoState>
    </ProjectState>
  );
}

export default App;
