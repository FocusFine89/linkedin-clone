import { Card } from "react-bootstrap";

const MostraAnalisi = (props) => {
  return (
    <Card className="p-2 text-center">
      <Card.Text>{props.title}</Card.Text>
    </Card>
  );
};

export default MostraAnalisi;
