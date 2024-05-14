import React, { useState } from 'react'
import {
  Button,
  Card,
  Col,
  Container,
  Image,
  Row,
  Modal,
} from 'react-bootstrap'
import Analisi from './Analisi'
import Risorse from './Risorse'
import Info from './Info'
import Sidebar from './Sidebar'
import ImageUpload from './ImageUpload'

const Main = ({ userId }) => {
  const [showModal, setShowModal] = useState(false)
  const [profileImage, setProfileImage] = useState(null)
  const [selectedFile, setSelectedFile] = useState(null)

  const handleModalOpen = () => {
    setShowModal(true)
  }

  const handleModalClose = () => {
    setShowModal(false)
  }

  const handleImageUpload = async imageUrl => {
    const formData = new FormData()
    formData.append('profile', selectedFile)

    try {
      const response = await fetch(
        `https://striveschool-api.herokuapp.com/api/profile/${51515}/picture`,
        {
          method: 'POST',
          headers: {
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYzA3OTE2N2U1MzAwMTVmYTY5NzgiLCJpYXQiOjE3MTU2NzEwOTcsImV4cCI6MTcxNjg4MDY5N30.uO2mvhQUTeeblkf1bIJR61bZlAt_3tHo51W9gcOg8L4',
          },
          body: formData,
        }
      )

      if (response.ok) {
        console.log('Immagine caricata con successo')
        const responseData = await response.json()
        const imageUrl = responseData.image
        setProfileImage(imageUrl)
      } else {
        console.error("Errore durante il caricamento dell'immagine")
      }
    } catch (error) {
      console.error("Errore durante il caricamento dell'immagine:", error)
    }
  }

  return (
    <Container fluid className="main">
      <Row>
        <Col xs={12} md={8}>
          <Card className="mb-2">
            <Card.Img
              src="https://images.fastcompany.net/image/upload/w_596,c_limit,q_auto:best,f_auto/wp-cms/uploads/2021/03/LinkedIn-Default-Background-2020-.jpg"
              className="card-img"
            />
            <Image
              src={
                profileImage ||
                'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
              }
              roundedCircle
              className="profile-img position-absolute "
              onClick={handleModalOpen}
            />
            <Card.Body className="card-body-info">
              <Card.Text className="ms-2">
                <div className="d-flex align-items-center">
                  <h2 className="me-2">Nikita Ivanov</h2>
                  <Button
                    variant="light"
                    className="rounded-pill verifica-ora text-primary border-primary pt-0"
                  >
                    Verifica ora
                  </Button>
                </div>

                <p className="info-lavoro">Full stack web developer</p>
                <p className="info-contatto">Angri, campania, italia</p>
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
        </Col>
        <Col xs={12} md={4}>
          <Sidebar />
        </Col>
      </Row>

      <Modal
        show={showModal}
        onHide={handleModalClose}
        className="modal-dark"
        size="lg"
      >
        <Modal.Header closeButton>
          <Modal.Title className="title-modal">Foto Profilo</Modal.Title>
        </Modal.Header>
        <Modal.Body className="color-modal d-flex flex-column align-items-center justify-content-center">
          <Image
            src={
              profileImage ||
              'https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png'
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
              userId={userId}
              selectedFile={selectedFile}
              setSelectedFile={setSelectedFile}
            />{' '}
            <Button variant="dark" className="me-2 mt-4 p-1">
              <i class="bi bi-images"></i> Fotogrammi
            </Button>
            <Button variant="dark" className="mt-4 p-1 ms-3">
              <i class="bi bi-trash"></i> Elimina
            </Button>
          </div>
        </Modal.Body>
      </Modal>
    </Container>
  )
}

export default Main
