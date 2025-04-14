import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiJavascript1,
  DiPython,
  DiJava,
  DiHtml5,
  DiCss3,
  DiNodejs,
  DiGit,
  DiPostgresql,
} from "react-icons/di";
import {
  SiTypescript,
  SiCplusplus,
  SiDart,
  SiR,
  SiGo,
  SiAngular,
  SiFlask,
  SiDjango,
  SiFirebase,
  SiMysql,
  SiTensorflow,
  SiScikitlearn,
  SiKeras,
  SiPytorch,
  SiApachekafka,
} from "react-icons/si";

function Techstack() {
  return (
    <>
      <h3 className="tech-header">Languages</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={3} md={1} className="tech-icons"><DiPython /></Col>
        <Col xs={3} md={1} className="tech-icons"><DiHtml5 /></Col>
        <Col xs={3} md={1} className="tech-icons"><DiCss3 /></Col>
        <Col xs={3} md={1} className="tech-icons"><DiJava /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiCplusplus /></Col>
        <Col xs={3} md={1} className="tech-icons"><DiJavascript1 /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiTypescript /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiDart /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiGo /></Col>
      </Row>

      <h3 className="tech-header">Frameworks & Databases</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={3} md={1} className="tech-icons"><SiFlask /></Col>
        <Col xs={3} md={1} className="tech-icons"><DiPostgresql /></Col>
        <Col xs={3} md={1} className="tech-icons"><DiNodejs /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiAngular /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiDjango /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiFirebase /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiMysql /></Col>
      </Row>

      <h3 className="tech-header">AIML / Data Engineering</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col xs={3} md={1} className="tech-icons"><SiScikitlearn /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiTensorflow /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiKeras /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiPytorch /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiApachekafka /></Col>
      </Row>
    </>
  );
}

export default Techstack;
