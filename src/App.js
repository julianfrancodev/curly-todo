import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import CreateAccount from './components/auth/CreateAccount';
import Login from './components/auth/Login';
import Projects from './components/projects/Projects';
import AlertState from './context/alert/AlertState';

import ProjectState from "./context/projects/ProjectState";
import TodoState from "./context/todos/TodoState";
import AuthState from "./context/auth/AuthState";

import RoutePrivate from './components/routes/RoutePrivate';

import tokenAuth from './config/tokenAuth';
// Revisar si tenemos un token 

const token = localStorage.getItem("tokenU");

if (token) {
  tokenAuth(token);
}

function App() {
  return (

    <ProjectState>
      <TodoState>
        <AlertState>
          <AuthState>
            <Router>
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/create-account" component={CreateAccount} />
                <RoutePrivate exact path="/projects" component={Projects} />
              </Switch>
            </Router>
          </AuthState>
        </AlertState>
      </TodoState>
    </ProjectState>
  );
}

export default App;
