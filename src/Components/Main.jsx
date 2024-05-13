import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Info from "./Info";

const Main = () => {
  return (
    <Container fluid className="main">
      <Row className="profile-infocard position-relative">
        <Col xs={12} lg={6}>
          <Card className="mb-2">
            <Card.Img
              src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              className="card-img"
            />
            <Image
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              roundedCircle
              className="profile-img position-absolute "
            />
            <Card.Body className="card-body-info">
              <Card.Text className="ms-2">
                <div className="d-flex align-items-center">
                  <h2 className="me-2">Nikita Ivanov</h2>
                  <Button
                    variant="light"
                    className="rounded-pill verifica-ora text-primary border-primary pt-0"
                  >
                    Verifica ora
                  </Button>
                </div>

                <p className="info-lavoro">Full stack web developer</p>
                <p className="info-contatto">Angri, campania, italia</p>
              </Card.Text>
              <div>
                <Button variant="primary" className="rounded-pill">
                  Disponibile per
                </Button>
                <Button
                  variant="light"
                  className="rounded-pill text-primary border border-primary mx-3"
                >
                  Aggiungi sezione del profilo
                </Button>
                <Button
                  variant="light"
                  className="rounded-pill text-dark border border-dark"
                >
                  Altro
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <Analisi />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <Risorse />
        </Col>
      </Row>
      <Row>
        <Col xs={12} lg={6}>
          <Info />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
