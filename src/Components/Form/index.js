import React from 'react'
import { Row, Form, Container } from 'react-bootstrap'

export const FormSigin = () => {
  return (
    <>
      <Form>
        <Container>
          <h1 className="header-title">Aprende ahora!</h1>
          <p className="header-subtitle">Inicia sesion</p>
          <Row >
            <Form.Control className="form-control-codev" placeholder="Correo" />
          </Row>
          <Row >
            <Form.Control className="form-control-codev" placeholder="Nombre" />

          </Row>
          <Row >
            <Form.Control className="form-control-codev" placeholder="Contraseña" />

          </Row>
          <Row className="d-flex justify-content-center">
            <button className="signup-header-submit">Comienza</button>
          </Row>
        </Container>
      </Form>
      <div className="signup-header-divider">
        <span>O registrate</span>
      </div>
      <div className="signup-header-social-login">
        <button className="signup-header-social-login">
          <img src="https://www.sololearn.com/Images/header-signup-google.svg" alt="" />
        </button>
        <button className="signup-header-social-login">
          <img src="https://www.sololearn.com/Images/header-signup-facebook.svg" alt="" />
        </button>

      </div>

    </>
  )
}
