import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiGit,
    DiRubyRough,
} from "react-icons/di";
import { SiAssemblyscript, SiRstudio } from "react-icons/si";
import './About.css';
import { TbSql } from "react-icons/tb";
import { BsFiletypeCss, BsFiletypeHtml } from "react-icons/bs";

function Familiar() {
    return ( <
        Row style = {
            { display: "flex", flexDirection: "row" }
        } >
        <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        TbSql / >
        <
        /Col>  <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiJavascript1 / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiGit / >
        <
        /Col> 

        <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiReact / >
        <
        /Col>  <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        BsFiletypeCss / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        BsFiletypeHtml / >
        <
        /Col>  


        <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        SiAssemblyscript / >
        <
        /Col>  <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        SiRstudio / >
        <
        /Col> <
        Col xs = { 4 }
        md = { 2 }
        className = "tech-icons" >
        <
        DiRubyRough / >
        <
        /Col>   < /
        Row >
    );
}

export default Familiar;