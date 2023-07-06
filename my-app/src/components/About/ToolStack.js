import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiSlack,
    SiLatex,
} from "react-icons/si";
import { BiLogoAws, BiLogoGithub } from "react-icons/bi";
import { DiLinux } from "react-icons/di";
import './About.css';

function Toolstack() {
    return ( <
        Row style = {
            { display: "flex", flexDirection: "row" }
        } >
        <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        BiLogoAws / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        BiLogoGithub / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        SiVisualstudiocode / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        SiSlack / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiLinux / >
        <
        /Col> 

        <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        SiLatex / >
        <
        /Col> 

        <
        /Row>
    );
}

export default Toolstack;