/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/me2.png";
import Tilt from "react-parallax-tilt";
// import {
//   AiFillGithub,
//   AiOutlineTwitter,
//   AiFillInstagram,
// } from "react-icons/ai";
// import { FaLinkedinIn } from "react-icons/fa";
import Contact from "../Contact/Contact";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              <span className="light-blue"> FALANDO </span> UM POUCO SOBRE MIM
            </h1>
            <p className="home-about-body">
              Sou Engenheiro Civil e atuei pela profissão de 2018 até 2021 👷
              <br />
              <br /> Sempre tive paixão por Tecnologia e Informática e com a baixa do mercado de Engenharia e a ascendência do mercado de TI, resolvi investir na área entrando de cabeça nos estudos de
              <i>
                <b className="light-blue"> Desenvolvimento Web</b>
              </i>. Hoje curso<b className="light-blue"> Análise e Desenvolvimento de Sistemas </b> e tenho previsão de graduação em 2024.
              <br />
              <br />
              Atualmente sou fascinado pelo desenvolvimento  &nbsp;
              <i>
                <b className="light-blue">Front-End </b>&nbsp; 
              </i>e futuramente pretendo me aprofundar mais nos estudos e me tornar um desenvolvedor{" "}
              <b className="light-blue">
                  Fullstack.
                </b>
              <br />
              <br />
              Tenho me aprimorado em várias tecnologias e minhas preferidas são <b className="light-blue">Bootstrap</b> e
              <i>
                <b className="light-blue">
                  {" "}
                  Frameworks Javascript
                </b>
              </i>
              &nbsp; como
              <i>
                <b className="light-blue"> React.js </b>e <b className="light-blue">Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-thumbnail rounded-circle bg-info" alt="Responsive image" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Contact/>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
