import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import c from "../../assets/c.png";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiMongodb,
    DiPython,
    DiGit,
    DiJava,
} from "react-icons/di";
import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiSolidity,
    SiPostgresql,
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";
import './About.css';

function Techstack() {
    return ( <
        Row style = {
            { display: "flex", flexDirection: "row" }
        } >
        <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiJava / >
        <
        /Col>  <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiPython / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        CgCPlusPlus / >
        <
        /Col>

        <
        img className = "Clogo"
        src = { c }
        alt = "C"
        g / >

        <
        /
        Row >
    );
}

export default Techstack;