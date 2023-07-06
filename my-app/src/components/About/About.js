import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle1 from "../Particle/Particle1";
import './About.css';
import grad from '../../assets/graduation.jpg';
import Techstack from './TechStack';
import Familar from './Familiar';
import Toolstack from './ToolStack'

function About() {
    return ( <
        section >
        <
        Particle1 / >
        <
        Container className = "about-content" >
        <
        h1 > About me < img className = "graduated"
        src = { grad }
        alt = "Grad" / > < /h1>  <
        p >
        My full name is < strong style = {
            { color: "aquamarine" }
        } > Do Phu Trong Nguyen < /strong> - an alumni  <
        br / > < br / > of < strong style = {
            { color: "aquamarine" }
        } > The University of Arizona < /strong>. {" "} I am from Hanoi,  <
        br / > < br / > the beatiful capital city of Vietnam.

        <
        br / > < br / > < br / > < strong style = {
            { color: "aquamarine" }
        } > I am major in Computer Science, Data Science <
        br / > < br / > and Statistics < /strong>. {" "} I love coding, math, business and <
        br / > < br / > trading.

        <
        br / > < br / > < br / > In my freetime, I love playing games, listen to music <
        br / > < br / > and I am a big fan of sport. <
        /p>

        <
        br / > < br / >
        <
        h1 > Coding Language < /h1> 

        <
        Techstack / >

        <
        br / > < br / >

        <
        h1 > Familiar with < /h1>

        <
        Familar / >

        <
        br / > < br / >

        <
        h1 > Tools < /h1>

        <
        Toolstack / >
        <
        /
        Container > <
        /section>
    );
}

export default About;