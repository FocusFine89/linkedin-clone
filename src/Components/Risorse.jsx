import { Card, Col, Row } from "react-bootstrap";
import MostraAnalisi from "./MostraAnalisi";

const Risorse = () => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="fw-bold">Risorse</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            data-supported-dps="16x16"
            fill="currentColor"
            className="mercado-match me-2"
            width="16"
            height="16"
            focusable="false"
          >
            <path d="M8 3a8.59 8.59 0 00-8 5 8.54 8.54 0 008 5 8.55 8.55 0 008-5 8.55 8.55 0 00-8-5zm0 8a3 3 0 113-3 3 3 0 01-3 3zm2-3a2 2 0 11-2-2 2 2 0 012 2z"></path>
          </svg>
          Solo per te
        </Card.Subtitle>
        <Row>
          <Col xs={12} lg={12}>
            <Card.Text className="fw-bold fs-custom">
              {" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match me-2"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
              </svg>
              La mia rete
            </Card.Text>
            <Card.Subtitle>
              Salva e gestisci i tuoi collegamenti e interessi.
            </Card.Subtitle>
            <hr />
          </Col>

          <Col xs={12} lg={12}>
            <Card.Text className="fw-bold fs-custom">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                data-supported-dps="24x24"
                fill="currentColor"
                className="mercado-match me-2"
                width="24"
                height="24"
                focusable="false"
              >
                <path d="M19 5a3 3 0 00-3-3H5v20l7-6.29L19 22z"></path>
              </svg>
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
