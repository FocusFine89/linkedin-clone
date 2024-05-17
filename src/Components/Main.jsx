/* eslint-disable react-hooks/exhaustive-deps */
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Modal,
  Row,
} from "react-bootstrap";
import Analisi from "./Analisi";
import Risorse from "./Risorse";
import Info from "./Info";
import Sidebar from "./Sidebar";
import { useSelector } from "react-redux";
import { useState } from "react";
import Esperienze from "./Esperienze";
import ImageUpload from "./ImageUpload";

const Main = () => {
  const user = useSelector((state) => state.userMe.content);

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

  // fine nuova parte

  // useEffect(() => {
  //   dispatch(getUserAction());
  // }, []);

  return (
    <Container fluid className="main">
      <Row>
        {user && (
          <Col xs={12} md={8}>
            {/* modale */}

            <Modal
              show={showModal}
              onHide={handleModalClose}
              className="modal-dark"
              size="lg"
            >
              <Modal.Header closeButton className="modal-image">
                <Modal.Title className="title-modal">Foto Profilo</Modal.Title>
              </Modal.Header>
              <Modal.Body className="color-modal d-flex flex-column align-items-center justify-content-center">
                <Image
                  src={
                    profileImage ||
                    "https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  }
                  roundedCircle
                  className="profile-img mb-2"
                />

                <Button variant="dark" className="me-2 mt-4">
                  <i class="bi bi-eye"></i> Chiunque
                </Button>

                <div className="d-flex flex-row align-items-center">
                  <Button variant="dark" className="me-2 mt-4">
                    <i class="bi bi-pencil"></i> Modifica
                  </Button>
                  <ImageUpload
                    userId={user._id}
                    selectedFile={selectedFile}
                    setSelectedFile={setSelectedFile}
                  />{" "}
                  <Button variant="dark" className="me-2 mt-4 p-1">
                    <i class="bi bi-images"></i> Fotogrammi
                  </Button>
                  <Button variant="dark" className="mt-4 p-1 ms-3">
                    <i class="bi bi-trash"></i> Elimina
                  </Button>
                </div>
              </Modal.Body>
            </Modal>

            {/* fine modale */}
            <Card className="mb-2">
              <Card.Img
                src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
                className="card-img"
              />
              <Image
                src={profileImage || user.image}
                roundedCircle
                className="profile-img position-absolute "
                onClick={handleModalOpen}
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
