import React from 'react'
import { Container, Col } from 'react-bootstrap'
import { AiFillGithub, AiOutlineTwitter, AiFillInstagram } from 'react-icons/ai'
import { FaLinkedinIn } from 'react-icons/fa'
import { IoLogoWhatsapp } from 'react-icons/io'

function Contact() {
  return (
    <section>
      <Container fluid>
        <Col md={12} className="home-about-social">
          <h1>Entre em Contato</h1>
          <p>
            Sinta-se a vontade para me  <span className="light-blue">seguir </span> e trocar uma idéia!
          </p>
          <ul className="home-about-social-links row">
            <li className="social-icons col-2">
              <a
                href="https://github.com/italoengdev"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons col-2">
              <a
                href="https://twitter.com/italo_sg"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons col-2">
              <a
                href="https://www.linkedin.com/in/italoengdev/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour  home-social-icons"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li className="social-icons col-2">
              <a
                href="https://www.instagram.com/italo_sg/"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <AiFillInstagram />
              </a>
            </li>
            <li className="social-icons col-2">
              <a
                href="https://whatsa.me/5586999843969/?t=Ol%C3%A1%20Italo!"
                target="_blank"
                rel="noreferrer"
                className="icon-colour home-social-icons"
              >
                <IoLogoWhatsapp />
              </a>
            </li>
          </ul>
        </Col>
      </Container>
    </section>
  )
}

export default Contact
