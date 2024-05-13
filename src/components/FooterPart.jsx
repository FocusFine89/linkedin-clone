import { Container, Row, Col, Form } from 'react-bootstrap'
import '../FooterPart.css'

const FooterPart = () => {
  return (
    <Container id="footer" className="">
      <Row>
        <Col xs={12} md={10}>
          <Row>
            <Col xs={12} md={6} lg={3}>
              <div className="mr-3">
                <a href="">Informazioni</a>

                <a href="">Linee guida della community</a>

                <a href="">Privacy e condizioni</a>

                <a href="">Sales solution</a>

                <a href="">Centro sicurezza</a>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="mr-3">
                <a href="">Accessibilità</a>

                <a href="">Carriera</a>

                <a href="">Opzioni di annuncio</a>

                <a href="">Mobile</a>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="mr-3">
                <a href="">Talent Solutions</a>

                <a href="">Soluzioni di marketing</a>

                <a href="">Pubblicità</a>

                <a href="">Piccole imprese</a>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div id="footer-settings" class="mr-3">
                <div class="row">
                  <div class="col-auto">
                    <i class="bi bi-question-circle-fill mx-0 mt-2"></i>
                  </div>
                  <div class="col">
                    <a href="">Domande?</a>
                    <p>visita il nostro Centro assistenza. </p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-auto">
                    <i class="bi bi-gear-fill mx-0 mt-2"></i>
                  </div>
                  <div class="col">
                    <a href="">Gestisci il tuo account e la tua privacy</a>
                    <p>Vai alle tue impostazioni</p>
                  </div>
                </div>
                <div class="row">
                  <div class="col-auto">
                    <i class="bi bi-envelope-fill mx-0 mt-2"></i>
                  </div>
                  <div class="col">
                    <a href="">Trasparenza sui contenuti consigliati</a>
                    <p>Scopri di più sui contenuti</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Col>
        <Col xs={12} md={2}>
          <div>
            <Form>
              <Form.Group controlId="languages w-50">
                <Form.Label>Seleziona Lingua</Form.Label>
                <Form.Control as="select">
                  <option>Italiano</option>
                  <option>Inglese</option>
                  <option>Francese</option>
                  <option>Spagnolo</option>
                </Form.Control>
              </Form.Group>
            </Form>
          </div>
        </Col>
      </Row>
      <Row>
        <Col className="mt-4">
          <p className="last-p">
            Linkedin corporation &copy; {new Date().getFullYear()}
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default FooterPart
