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
                <br />
                <a href="">Linee guida della community</a>
                <br />
                <a href="">Privacy e condizioni</a>
                <br />
                <a href="">Sales solution</a>
                <br />
                <a href="">Centro sicurezza</a>

                <br />
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="mr-3">
                <a href="">Accessibilità</a>
                <br />
                <a href="">Carriera</a>
                <br />
                <a href="">Opzioni di annuncio</a>
                <br />
                <a href="">Mobile</a>
                <br />
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="mr-3">
                <a href="">Talent Solutions</a>
                <br />
                <a href="">Soluzioni di marketing</a>
                <br />
                <a href="">Pubblicità</a>
                <br />
                <a href="">Piccole imprese</a>
                <br />
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div id="footer-settings" className="mr-3">
                <i className="bi bi-question-circle-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href="">Domande?</a>
                  <p>visita il nostro Centro assistenza. </p>
                </div>
                <i className="bi bi-gear-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href="">Gestisci il tuo account e la tua privacy</a>
                  <p>Vai alle tue impostazioni</p>
                </div>
                <i className="bi bi-envelope-fill mx-0 mt-2"></i>
                <div className="ml-2">
                  <a href="">Trasparenza sui contenuti consigliati</a>
                  <p>Scopri di più sui contenuti</p>
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
