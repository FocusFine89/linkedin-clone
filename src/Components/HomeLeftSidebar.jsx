import { Card, Col, Image } from "react-bootstrap";
import { useSelector } from "react-redux";

const HomeLeftSideBar = () => {
  const user = useSelector((state) => state.userMe.content);

  return (
    <Col>
      {user && (
        <Card className="mt-3">
          <div className="position-relative ">
            <Image
              className="sidebarImgStyle"
              src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
            />
            <Image
              className="rounded-circle cirleImgStyle position-absolute"
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            />{" "}
          </div>
          <Card.Body className="mt-5">
            <Card.Title>Ti diamo il benvenuto {user.name}</Card.Title>
            <Card.Link className="text-center" href="#">
              Aggiungi una foto
            </Card.Link>
            <hr />
            <div className="d-flex justify-content-between">
              <Card.Text>Visitatori del profilo</Card.Text>
              <Card.Text className="text-primary">20</Card.Text>
            </div>
            <div className="d-flex justify-content-between">
              <Card.Text>Collegamenti</Card.Text>
              <Card.Text className="text-primary">40</Card.Text>
            </div>

            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
      )}
    </Col>
  );
};

export default HomeLeftSideBar;
