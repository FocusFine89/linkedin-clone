import { Card } from "react-bootstrap";

const Info = () => {
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="fw-bold">Informazioni</Card.Title>
        <Card.Text>Informazioni del profilo-Bio in API</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Info;
