import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle/Particle"
import logo from '../../assets/vietnam.png';
import ava from '../../assets/trong_nguyen.jpg';
import uofa from '../../assets/uofa.png';
import Type from "./Type";
import {
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import { SlEnvolope } from "react-icons/sl";
import { FaLinkedinIn } from "react-icons/fa";
import './Home.css';


function Home() {
    return ( <
        section >
        <
        Particle / >
        <
        Container fluid className = "home-section"
        id = "home" >
        <
        Container className = "home-content" >

        <
        h1 > Hi Everyone!
        <
        span className = "wave"
        role = "img" > 👋🏻
        <
        /span> <
        img className = "resize"
        src = { ava }
        alt = "Ava" / >
        <
        /h1> 


        <
        h1 className = "heading-name" >
        I am Trong Nguyen from < img src = { logo }
        alt = "Logo" / >
        <
        /h1>

        <
        h1 >
        Alumni at UofA < img className = "uofa"
        src = { uofa }
        alt = "Uofa" / >
        <
        /h1>

        <
        div id = "type-writer" >
        <
        Type / >
        <
        br / >
        <
        br / >
        <
        /div>

        <
        div id = "connect-home" >
        <
        p > Connect with me at < /p> <
        ul className = "home-social" >
        <
        li >
        <
        a href = "https://www.linkedin.com/in/trongnguyen197/" >
        <
        FaLinkedinIn style = {
            { color: "white", fontSize: "25px" }
        }
        />  < /
        a > <
        /li>

        <
        li >
        <
        a href = "https://github.com/TrongNguyenzzz" >
        <
        AiFillGithub style = {
            { color: "white", fontSize: "25px" }
        }
        />  < /
        a > <
        /li>

        <
        li >
        <
        a href = "mailto: trongnguyen190701@gmail.com" >
        <
        SlEnvolope style = {
            { color: "white", fontSize: "25px" }
        }
        />  < /
        a > <
        /li> < /
        ul > <
        /div> < /
        Container > <
        /Container> < /
        section >
    )
}

export default Home;