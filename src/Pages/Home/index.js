import React from 'react'
import wave from '../../Assets/wave.svg'
import { Navbarr } from '../../Components/Navbar'
import ilustration1 from '../../Assets/ilustration1.svg'
import { Container, Row, Col } from 'react-bootstrap'

export const Home = () => {
  return (

    <>
      <Navbarr></Navbarr>

      <img src={wave} alt="" />
      <Container>
        <Row>
          <Col md={6}><img style={{ maxWidth: '100%' }} className="ilustration" src={ilustration1} alt="" /></Col>
          <Col md={6}><div>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ullam delectus dicta ipsam nobis quisquam vitae iste, obcaecati animi quis? Sunt blanditiis quos, sint fugiat dolores exercitationem pariatur! Nesciunt, tempore explicabo.</div></Col>
        </Row>
      </Container>


    </>
  )
}
