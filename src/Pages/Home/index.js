import React from 'react'
//import wave from '../../Assets/wave.svg'
import { Navbarr } from '../../Components/Navbar'
import ilustration1 from '../../Assets/ilustration1.svg'
import { Container, Row, Col } from 'react-bootstrap'
import { FormSigin } from '../../Components/Form'
import { HomeCourses } from '../../Components/HomeCourses'
import { HomeBecome } from '../../Components/HomeBecome'
import { HomeFooter } from '../../Components/HomeFooter'
import wave from '../../Assets/wave.svg'



export const Home = () => {
  return (

    <div style={{ backgroundImage: `url(${wave})`, minHeight: '100vh', backgroundRepeat: 'no-repeat', backgroundPositionY: 50, /* backgroundSize: 'cover'  */ }}>
      <Navbarr></Navbarr>


      {/* <img src={wave} alt="" /> */}
      <Container fluid style={{ paddingTop: 20 }} >
        <Row className="justify-content-between justify-content-md-around justify-content-sm-center" style={{ zIndex: 4 }}>
          <Col style={{ marginLeft: -100 }} md={8} lg={8}><img style={{ maxWidth: '100%' }} className="ilustration" src={ilustration1} alt="" /></Col>
          <Col md={4} lg={4}> <FormSigin></FormSigin></Col>
        </Row>
      </Container>
      <HomeCourses className="mt-5"></HomeCourses>
      <HomeBecome></HomeBecome>
      <HomeFooter></HomeFooter>

    </div>
  )
}
