import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import homeLogo from '../../Assets/home2.png'
import Home2 from './Home2'
import Type from './Type'

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <Col md={8} className="home-header">
              <div className="heading">
                <h3 className="d-inline text-dark">Dr.</h3>
                <h3 className="d-inline">Gustavo</h3>{' '}
                <h3 className="d-inline text-dark">Pinheiro Clínica Odontológica</h3>
              </div>
              <Row>
                <Col md={6}>
                  <h1 className="heading-name">
                   Temos Especialistas nas mais diversas áreas da odontologia:
                  </h1>
                </Col>
                <Col md={6}>
                  <div style={{ paddingLeft: 20, textAlign: 'left',paddingTop:10 }}>
                    <Type />
                  </div>
                </Col>
              </Row>

              <h1 className="main-name"> Uma infraestrutura exclusiva para atender você de forma rápida, segura e com o melhor custo benefício.</h1>
            </Col>
            <Col
              md={4}
              
              className="d-flex align-self-center justify-content-center"
            >
              <img
                src={homeLogo}
                alt="home pic"
                className="img-fluid rounded-circle "
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  )
}

export default Home
