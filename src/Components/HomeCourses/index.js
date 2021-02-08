import React from 'react'
import { Container, Row, Col, Button, Card } from 'react-bootstrap'
import Html from '../../Assets/html.png'
import JavaScript from '../../Assets/javascript.png'
import Css from '../../Assets/css.png'
import { Link } from "react-router-dom";



export const HomeCourses = () => {
  const ListofCards = [
    {
      urlImagen: Html,
      title: 'HTML',
      text: 'Este curso GRATUITO le enseñará cómo diseñar una página web usando HTML. Complete una serie de ejercicios prácticos y practique mientras escribe código HTML real.',
      link: 'Comenzar'
    },
    {
      urlImagen: Css,
      title: 'CSS',
      text: 'Nuestro curso de CSS le enseñará cómo controlar el estilo y el diseño de los sitios web. Complete una serie de ejercicios y practique mientras completa plantillas CSS reales',
      link: 'Comenzar'
    },
    {
      urlImagen: JavaScript,
      title: 'JAVASCRIPT',
      text: 'Aprenda todas las características básicas de JavaScript, incluido hacer que su sitio web sea más interactivo, cambiar el contenido del sitio web, validar formularios y mucho más.',
      link: 'Comenzar',
      path: '/javascript'
    }

  ]
  return (
    <div className="home-courses">
      <Container style={{ marginTop: '100px' }}>
        <article>
          <h1>Mira todos nuestros cursos</h1>
          <Row className="justify-content-md-center">
            {ListofCards.map((card) => (
              <Col xs={12} md={4} lg={4}>
                <section key={card.urlImagen}>
                  <Card className="home-card-course mb-5">
                    <div className="home-course">
                      <Card.Img variant="top" src={card.urlImagen}></Card.Img>
                    </div>
                    <Card.Body>
                      <Card.Title>{card.title}</Card.Title>
                      <Card.Text>{card.text}</Card.Text>
                      <Link to={card.path}>
                        <Button className="home-card-course-btn">{card.link}</Button>
                      </Link>
                    </Card.Body>
                  </Card>
                </section>
              </Col>
            ))}
          </Row>
          <Link to="/proximamente" >
            <a className="home-courses-view-all"  >Mira nuestros cursos →</a>
          </Link>


        </article>

      </Container>

    </div>
  )
}
