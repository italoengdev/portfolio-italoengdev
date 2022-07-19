import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'
import interview from '../../Assets/Projects/1-interview.png'
import dashboard from '../../Assets/Projects/2-dashboard.png'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus <strong className="light-blue">Projetos </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Alguns projetos que venho trabalhando...
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={interview}
              isBlog={false}
              title="Interview Pokemon-Style"
              description="Projeto pessoal desenvolvido para o treino de Async, Promises, QuerySelectors, Conditionals e Bootstrap. Trata-se de uma simulação de uma Entrevista de Contratação. O Tech Recruiter e o Dev travam uma luta no estilo Batalha Pokemon! Haha! Jogue, faça seu Dev vitorioso e consiga sua vaga. Dica: Estude as Linguagens e Frameworks e vire um Dev FullStack!."
              ghLink="https://github.com/italoengdev/Interview_Fight"
              demoLink="https://interview-fight.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dashboard}
              isBlog={false}
              title="Medical Dashboard"
              description="Projeto desenvolvido para teste de vaga de estágio. Se trata de um Dashboard para uma clínica médica. Funcionalidades:
              HTML TAGs,
              CSS styles,
              Bootstrap 5.2,
              FullCalendar JavaScript Plugin and SETUP (https://fullcalendar.io/),
              DOM events,
              AJAX requests,
              Arrays Manipulation (map,filter.sort),
              Regular Expressions &
              sessionStorage"
              ghLink="https://github.com/italoengdev/Medical-Dashboard"
              demoLink="https://teste-medical-dashboard.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
