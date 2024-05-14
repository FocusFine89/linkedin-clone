/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Info from "./Info";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getUserAction } from "../redux/actions/getUserAction";
import Esperienze from "./Esperienze";

const Main = () => {
  const user = useSelector((state) => state.userMe.content);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUserAction());
  }, []);
  return (
    <Container fluid className="main">
      <Row>
        {user && (
          <Col xs={12} md={8}>
            <Card className="mb-2">
              <Card.Img
                src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
                className="card-img"
              />
              <Image
                src={user.image}
                roundedCircle
                className="profile-img position-absolute "
              />
              <Card.Body className="card-body-info">
                <Card.Text className="ms-2">
                  <div className="d-flex align-items-center">
                    <h2 className="me-2">
                      {user.name} {user.surname}
                    </h2>
                    <Button
                      variant="light"
                      className="rounded-pill verifica-ora text-primary border-primary pt-0"
                    >
                      Verifica ora
                    </Button>
                  </div>

                  <p className="info-lavoro">{user.title}</p>
                  <p className="info-contatto">{user.area}</p>
                </Card.Text>
                <div>
                  <Button variant="primary" className="rounded-pill me-3 mb-2">
                    Disponibile per
                  </Button>
                  <Button
                    variant="light"
                    className="rounded-pill text-primary border border-primary me-3"
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
            <Analisi />
            <Risorse />
            <Info />
            <Esperienze />
          </Col>
        )}

        <Col xs={12} md={4}>
          <Sidebar />
        </Col>
      </Row>
    </Container>
  );
};

export default Main;
