import { useState } from 'react'
import { Button, Card, Modal, Form } from 'react-bootstrap'
import { MdOutlinePhotoSizeSelectActual } from 'react-icons/md'
import { AiFillYoutube } from 'react-icons/ai'
import { HiOutlineDocumentChartBar } from 'react-icons/hi2'
import { BsThreeDots } from 'react-icons/bs'

const AddingPost = () => {
  const [show, setShow] = useState(false)
  const [postText, setPostText] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const handlePost = async () => {
    try {
      const response = await fetch(
        'https://striveschool-api.herokuapp.com/api/posts/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Authorization:
              'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmVmMjE2N2U1MzAwMTVmYTY5NzQiLCJpYXQiOjE3MTU1ODQ3NTQsImV4cCI6MTcxNjc5NDM1NH0.woy53zt1_zmruJl4tAXEXJzDTX-iJFUOCihD3MU3Coc',
          },
          body: JSON.stringify({ text: postText }),
        }
      )

      if (response.ok) {
        console.log('Post pubblicato con successo')
        handleClose()
      } else {
        console.error('Errore durante il tentativo di pubblicare il post:')
      }
    } catch (error) {
      console.error(
        'Si è verificato un errore durante il tentativo di pubblicare il post:',
        error
      )
    }
  }

  return (
    <Card
      className="mb-2"
      style={{
        maxWidth: '900px',
        maxHeight: '500px',
        borderRadius: '0.3rem',
        marginTop: '20px',
        backgroundColor: 'white',
      }}
    >
      <Card.Body>
        <Card.Title className="fw-bold">Aggiungi un Post</Card.Title>
        <div className="d-flex align-items-center">
          <img
            src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
            alt="profile-img"
            className="rounded-circle me-3"
            style={{ width: '55px', height: '55px' }}
          />
          <Button
            onClick={handleShow}
            variant="light"
            className="flex-grow-1 text-start"
          >
            Avvia un Post
          </Button>
        </div>
        <div className="d-flex justify-content-around mt-3">
          <Button variant="outline-white">
            <i className="bi bi-image me-2"></i>Contenuti Multimediali
          </Button>
          <Button variant="outline-white">
            <i className="bi bi-calendar3 me-2"></i>Evento
          </Button>
          <Button variant="outline-white">
            <i className="bi bi-clipboard2-heart me-2"></i>
            Scrivi un Articolo
          </Button>
        </div>
      </Card.Body>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Crea un post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="d-flex align-items-center">
            <img
              src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
              alt="profile-img"
              className="rounded-circle me-3 mb-3"
              style={{ width: '55px', height: '55px' }}
            />
            <p>Nikita Ivanov</p>
          </div>
          <Form>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Di cosa vorresti parlare?"
                value={postText}
                onChange={e => setPostText(e.target.value)}
              />
            </Form.Group>
          </Form>
          <div className="d-flex justify-content-between align-items-center">
            <div className="d-flex align-items-center">
              <Button variant="light" className="me-2 mt-2">
                <MdOutlinePhotoSizeSelectActual />
              </Button>
              <Button variant="light" className="me-2 mt-2">
                <AiFillYoutube />
              </Button>
              <Button variant="light" className="me-2 mt-2">
                <HiOutlineDocumentChartBar />
              </Button>
              <Button variant="light" className="me-2 mt-2">
                <BsThreeDots />
              </Button>
            </div>
            <div className="d-flex align-items-center">
              <Button variant="light" className="me-2"></Button>
              <Button variant="primary" className="mt-2" onClick={handlePost}>
                Post
              </Button>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </Card>
  )
}

export default AddingPost
