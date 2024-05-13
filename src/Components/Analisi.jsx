import { Card, Col, Row } from "react-bootstrap";
import MostraAnalisi from "./MostraAnalisi";

const Analisi = () => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="fw-bold">Analisi</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">solo per te</Card.Subtitle>
        <Row>
          <Col xs={12} lg={4}>
            <Card.Text className="fw-bold">
              vissualizzazioni del profilo
            </Card.Text>
            <Card.Subtitle>
              Scopri chi ha visitato il tuo profilo.
            </Card.Subtitle>
          </Col>
          <Col xs={12} lg={4}>
            <Card.Text className="fw-bold">impressioni del profilo</Card.Text>
            <Card.Subtitle>
              Scopri chi sta interagendo con i tuoi post.
            </Card.Subtitle>
            <Card.Subtitle className="text-muted mt-2">
              Ultimi 7 giorni
            </Card.Subtitle>
          </Col>
          <Col xs={12} lg={4}>
            <Card.Text className="fw-bold">
              comparse nei motori di ricerca
            </Card.Text>
            <Card.Subtitle>
              Vedi quante volte compari nei risultati di ricerca
            </Card.Subtitle>
          </Col>
        </Row>
      </Card.Body>
      <MostraAnalisi title="Mostra tutte le analisi" />
    </Card>
  );
};

export default Analisi;
