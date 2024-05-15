/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Card, Col, Container, Image, Row } from "react-bootstrap";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Info from "./Info";
import Sidebar from "./Sidebar";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUserAction } from "../redux/actions/getUserAction";
import Esperienze from "./Esperienze";
import ModalChangeImage from "./ModalChangeImage";

const Main = () => {
  const user = useSelector((state) => state.userMe.content);
  const dispatch = useDispatch();
  // nuova parte

  const [showModal, setShowModal] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleModalOpen = () => {
    setShowModal(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
  };

  const handleImageUpload = async (imageUrl) => {
    const formData = new FormData();
    formData.append("profile", selectedFile);

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${user._id}/picture`,
        {
          method: "POST",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmVmMjE2N2U1MzAwMTVmYTY5NzQiLCJpYXQiOjE3MTU1ODQ3NTQsImV4cCI6MTcxNjc5NDM1NH0.woy53zt1_zmruJl4tAXEXJzDTX-iJFUOCihD3MU3Coc",
          },
          body: formData,
        }
      );

      if (response.ok) {
        console.log("Immagine caricata con successo");
        const responseData = await response.json();
        const imageUrl = responseData.image;
        setProfileImage(imageUrl);
      } else {
        console.error("Errore durante il caricamento dell'immagine");
      }
    } catch (error) {
      console.error("Errore durante il caricamento dell'immagine:", error);
    }
  };

  // fine nuova parte

  useEffect(() => {
    dispatch(getUserAction());
  }, []);

  return (
    <Container fluid className="main">
      <Row>
        {user && (
          <Col xs={12} md={8}>
            <Card className="mb-2">
              <ModalChangeImage
                show={showModal}
                onHide={() => setShowModal(false)}
              />
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
