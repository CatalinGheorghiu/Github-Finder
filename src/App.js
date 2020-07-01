import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import User from "./components/users/User";
import About from "./components/pages/About";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound";

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

// Component
const App = () => {
    return (
        <GithubState>
            <AlertState>
                <Router>
                    <div className="App">
                        {/* Prop */}
                        <Navbar />
                        <div className="container">
                            {/* Components */}
                            <Alert />
                            <Switch>
                                {/* Route */}
                                <Route exact path="/" component={Home} />
                                {/* Route */}
                                <Route exact path="/about" component={About} />
                                {/* Route */}
                                <Route
                                    exact
                                    path="/user/:login"
                                    component={User}
                                />
                                <Route component={NotFound} />
                            </Switch>
                        </div>
                    </div>
                </Router>
            </AlertState>
        </GithubState>
    );
};

export default App;
