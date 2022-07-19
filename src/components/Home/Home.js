import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import homeLogo from "../../Assets/me.png";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>

          <Col md={4} style={{ padding: 20 }} className="d-flex align-self-center justify-content-center">
              <img
                src={homeLogo}
                alt="home pic"
                className="img-thumbnail rounded-circle "
          
              />
            </Col>

            <Col md={8} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading"><i>{`<Hello World!/>`}</i>
              </h1>

              <h1 className="heading-name">
                Eu sou
                <h1 className="main-name"> ITALO SARAIVA GONÇALVES</h1>
              </h1>

              <div style={{ padding: 50, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

         
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
