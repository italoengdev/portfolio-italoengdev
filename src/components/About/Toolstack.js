import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiCanva,
  SiVisualstudiocode,
  SiVercel,
  SiMicrosoftexcel
} from "react-icons/si";
import Outsystems from "../../Assets/2916417.png";
import Revit from "../../Assets/revit.png";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <SiCanva title="Canva" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode title="Visual Studio Code" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftexcel title="Excel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVercel title="Vercel" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={Outsystems} style={{ justifyContent: "center", height: "100px", color:"white" }} alt="Outsystems Low-Code" title="Outsystems" />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <img src={Revit} style={{ justifyContent: "center", height: "100px", color:"white" }} alt="Revit" title="Revit" />
      </Col>
    </Row>
  );
}

export default Toolstack;
