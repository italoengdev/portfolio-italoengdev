import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'
import { SiYourtraveldottv } from 'react-icons/si'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Olá pessoal, me chamo{' '}
            <span className="light-blue">Italo Saraiva Gonçalves </span>
            <br/>
            Sou de <span className="purple"> Teresina, Piauí, Brasil.</span>
            <br />
            Eu sou um Desenvolvedor Front-End.
            <br />
            <br />
            Além de estudar desenvolvimento eu também...
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Jogar Video-Games, especialmente futebol e RPG
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <SiYourtraveldottv/> Amo Viajar
            </li>
          </ul>

          <p style={{ color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
