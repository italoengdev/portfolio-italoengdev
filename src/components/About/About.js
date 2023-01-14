import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Github from './Github'
import Techstack from './Techstack'
import Aboutcard from './AboutCard'
import me4 from '../../Assets/me4.jpeg'
import game from '../../Assets/TW3_Wild_Hunt.png'
import rupture from '../../Assets/rupture.jpg'
import strokes from '../../Assets/strokes.jpg'
import Toolstack from './Toolstack'
import AwesomeSlider from 'react-awesome-slider';
import 'react-awesome-slider/dist/styles.css';

function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row style={{ justifyContent: 'center', padding: '10px' }}>
          <Col
            md={5}
            style={{ paddingTop: '50px', paddingBottom: '50px' }}
            className="about-img"
          >
            <AwesomeSlider transitionDelay={0} className="img-fluid img-thumbnail rounded">
              <div data-src={me4}  />
              <div data-src={game} />
              <div data-src={rupture} />
              <div data-src={strokes} />
            </AwesomeSlider>
          </Col>
          <Col
            md={7}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '50px'
            }}
          >
            <h1 style={{ fontSize: '2.1em', paddingBottom: '20px' }}>
              <strong className="light-blue">Conheça-me </strong>um pouco
              mais...
            </h1>
            <Aboutcard />
          </Col>
        </Row>
        <h1 className="project-heading">
          Habilidades <strong className="light-blue">Profissionais</strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="light-blue">Programas</strong> que domino
        </h1>
        <Toolstack />

        <Github />
      </Container>
    </Container>
  )
}

export default About
