import { Button, Card, Col, Image, ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { BookmarkFill, Plus } from "react-bootstrap-icons";
import MostraAnalisi from "./MostraAnalisi";
const HomeLeftSideBar = () => {
  const user = useSelector((state) => state.userMe.content);

  return (
    <>
      <Col xs={12}>
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
              <Card.Link
                className="link-offset-2 link-underline link-underline-opacity-0"
                href="#"
              >
                Aggiungi una foto
              </Card.Link>
              <hr />
              <div className="d-flex justify-content-between">
                <Card.Text className="fw-bold">
                  Visitatori del profilo
                </Card.Text>
                <Card.Text className="text-primary">20</Card.Text>
              </div>
              <div className="d-flex justify-content-between">
                <Card.Text className="fw-bold">Collegamenti</Card.Text>
                <Card.Text className="text-primary">40</Card.Text>
              </div>
              <hr />
              <Card.Subtitle className="text-muted">
                Dai una spinta alla tua carriera e parti in vantaggio
              </Card.Subtitle>
              <Card.Link href="#" className="fw-bold card-link-black">
                Prova premium per 0 EUR
              </Card.Link>
              <hr />
              <Card.Link
                href="#"
                className="card-link-black link-offset-2 link-underline link-underline-opacity-0"
              >
                <span className="me-3">
                  <BookmarkFill />
                </span>
                Elementi salvati
              </Card.Link>
            </Card.Body>
          </Card>
        )}
      </Col>
      <Col xs={12} className="mt-3">
        <Card>
          <Card.Body>
            <Card.Text>
              <Card.Link
                href="#"
                className="link-offset-2 link-underline link-underline-opacity-0"
              >
                Gruppi
              </Card.Link>
            </Card.Text>
            <Card.Text className="d-flex justify-content-between align-items-center ">
              <Card.Link
                href="#"
                className="link-offset-2 link-underline link-underline-opacity-0"
              >
                Eventi{" "}
              </Card.Link>
              <Button type="button" className="p-0 bg-transparent border-0">
                {" "}
                <Plus size={30} color="black" />
              </Button>
            </Card.Text>
            <Card.Text>
              <Card.Link
                href="#"
                className="link-offset-2 link-underline link-underline-opacity-0"
              >
                Hashtag seguiti{" "}
              </Card.Link>
            </Card.Text>
          </Card.Body>
          <MostraAnalisi title="Scopri di più" />
        </Card>
      </Col>
    </>
  );
};

export default HomeLeftSideBar;
