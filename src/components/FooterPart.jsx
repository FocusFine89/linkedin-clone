import { Container, Row, Col, Form } from 'react-bootstrap'
import '../FooterPart.css'
const FooterPart = () => {
  return (
    <Container id="footer" className="">
      <Row>
        <Col xs={12} md={10}>
          <Row>
            <div className="mr-3">
              <Col xs={12} md={6} lg={3}>
                <a href="">Informazioni</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Linee guida della community</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Privacy e condizioni </a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Sales solution</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Centro sicurezza</a>
              </Col>
            </div>

            <div className="mr-3">
              <Col xs={12} md={6} lg={3}>
                <a href="">Accessibilità</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Carriera</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">opzioni di annuncio</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Mobile</a>
              </Col>
            </div>

            <div className="mr-3">
              <Col xs={12} md={6} lg={3}>
                <a href="">Talent Solutions</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Soluzioni di marketing</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">Pubblicità</a>
              </Col>
              <Col xs={12} md={6} lg={3}>
                <a href="">piccole imprese</a>
              </Col>
            </div>

            <div id="footer-settings" className="mr-3">
              <Col xs={12} md={6} lg={3} className="d-flex flex-row">
                <i class="bi bi-question-circle-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href="">Domande?</a>
                  <p>visita il nostro Centro aassistenza. </p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3} className="d-flex flex-row">
                <i class="bi bi-gear-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href="">Gestisci il tuo accout e la tua privacy</a>
                  <p>Vai alle tue impostazioni</p>
                </div>
              </Col>
              <Col xs={12} md={6} lg={3} className="d-flex flex-row">
                <i class="bi bi-envelope-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href="">Trasparenza sui contenuti connsigliati</a>
                  <p>Scopri di più sui contenuti</p>
                </div>
              </Col>
            </div>

            <div>
              <Col xs={12} md={6} lg={3}>
                <Form>
                  <Form.Group conntrolId="laguages">
                    <Form.Label>Seleziona Lingua</Form.Label>
                    <Form.Control as="select">
                      <option>Italiano</option>
                      <option>Inglese</option>
                      <option>Francese</option>
                      <option>Spagnolo</option>
                    </Form.Control>
                  </Form.Group>
                </Form>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <p>Linkedin corporation &copy; {new Date().getFullYear()}</p>
        </Col>
      </Row>
    </Container>
  )
}

export default FooterPart
