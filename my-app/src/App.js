import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Resume from "./components/Resume/Resume";

import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    Link
} from "react-router-dom";

function App() {
    return ( <
        BrowserRouter >
        <
        Navbar / >
        <
        Routes >
        <
        Route path = "/Home"
        element = { < Home / > }
        /> <
        Route path = "/About"
        element = { < About / > }
        /> <
        Route path = "/Projects"
        element = { < Projects / > }
        /> <
        Route path = "/Resume"
        element = { < Resume / > }
        /> <
        Route path = "*"
        element = { < Home / > }
        /> <
        /Routes> <
        /BrowserRouter>
    );
}

export default App;