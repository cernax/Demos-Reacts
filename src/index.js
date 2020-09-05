import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/Home/Home";
import Users from "./components/Users/Users";
import Prod from "./components/Productos/Prod";
import Prov from "./components/Proveedor/Prov";
import Navbar from "react-bootstrap/Navbar";
import { FaHome } from 'react-icons/fa';
import { IconContext } from "react-icons";


ReactDOM.render(
    <Router>
        <div>
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand href="/">
                    <IconContext.Provider value={{ color: "White", size: "3em"}}>
                        <div>
                            <FaHome/>
                        </div>
                    </IconContext.Provider>
                </Navbar.Brand>
                <Navbar.Brand href={'/Users'} >Usuarios</Navbar.Brand>
                <Navbar.Brand href={'/Prod'} >Productos</Navbar.Brand>
                <Navbar.Brand href={'/Prov'} >Proveedor</Navbar.Brand>
            </Navbar>
            <Switch>
                <Route path="/Prov">
                    <Prov/>
                </Route>
                <Route path="/Prod">
                    <Prod/>
                </Route>
                <Route path="/Users">
                    <Users />
                </Route>
                <Route path="/">
                    <Home />
                </Route>
            </Switch>
        </div>
    </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
