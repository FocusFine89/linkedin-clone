import { Card } from "react-bootstrap";
import { useSelector } from "react-redux";

const Info = () => {
  const user = useSelector((state) => state.userMe.content);
  return (
    <Card className="mb-2">
      <Card.Body>
        <Card.Title className="fw-bold">Informazioni</Card.Title>
        {user && <Card.Text>{user.bio}</Card.Text>}
      </Card.Body>
    </Card>
  );
};

export default Info;
