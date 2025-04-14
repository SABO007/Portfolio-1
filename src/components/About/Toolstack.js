import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiPostman,
  SiSlack,
  SiVercel,
  SiMacos,
  SiGit,
  SiAmazonaws,
  SiGooglecloud,
  SiMicrosoftazure,
  SiDocker,
} from "react-icons/si";

function Toolstack() {
  return (
    <>
      <h3 className="tech-header">Tools & Platforms</h3>
      <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
        <Col xs={3} md={1} className="tech-icons"><SiVisualstudiocode /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiGit /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiPostman /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiSlack /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiDocker /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiAmazonaws /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiGooglecloud /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiMicrosoftazure /></Col>
        <Col xs={3} md={1} className="tech-icons"><SiVercel /></Col>
      </Row>
    </>
  );
}

export default Toolstack;
