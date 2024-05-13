import { Card, Col, Row } from "react-bootstrap";
import MostraAnalisi from "./MostraAnalisi";

const Risorse = () => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="fw-bold">Risorse</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Solo per te</Card.Subtitle>
        <Row>
          <Col xs={12} lg={12}>
            <Card.Text className="fw-bold fs-custom">La mia rete</Card.Text>
            <Card.Subtitle>
              Salva e gestisci i tuoi collegamenti e interessi.
            </Card.Subtitle>
            <hr />
          </Col>

          <Col xs={12} lg={12}>
            <Card.Text className="fw-bold fs-custom">
              Elementi salvati
            </Card.Text>
            <Card.Subtitle>
              Monitora le tue offerte di lavoro, i corsi e gli articoli
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
      <MostraAnalisi title="Mostra tutte le risorse" />
    </Card>
  );
};

export default Risorse;
