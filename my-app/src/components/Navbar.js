import React from "react";
import { Nav } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Navbar.css'

function Navbar() {
    return ( <
        nav >
        <
        div >
        <
        ul id = "nav-bar" >
        <
        li > < Link to = "/Home" > Home < /Link></li >
        <
        li > < Link to = "/About" > About < /Link></li >
        <
        li > < Link to = "/Projects" > Projects < /Link></li >
        <
        li > < Link to = "/Resume" > Resume < /Link></li >
        <
        /ul> <
        /div> <
        /nav>
    )
}

export default Navbar;