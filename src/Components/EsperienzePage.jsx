/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {
  deleteExperienceAction,
  getExperienceAction,
} from '../redux/actions/getExperienceAction'
import ModalCreate from './ModalCreate'
import { Link, useParams } from 'react-router-dom'
import '../EsperienzePage.css' // Importa il file CSS personalizzato

const EsperienzePage = () => {
  const [modalShow, setModalShow] = useState(false)
  const dispatch = useDispatch()
  const experienceList = useSelector(state => state.experienceList.content)
  const user = useSelector(state => state.userMe.content)
  const params = useParams()

  useEffect(() => {
    dispatch(getExperienceAction(params.userID))
  }, [])

  return (
    <Card className="card-experience my-4 p-4 shadow-sm">
      <Row className="align-items-center mb-3">
        <Col xs={8}>
          <Card.Title className="fw-bold">Esperienze</Card.Title>
        </Col>
        <Col xs={4} className="text-end">
          <Button
            variant="primary"
            onClick={() => setModalShow(true)}
            className="button-add"
          >
            +
          </Button>
        </Col>
      </Row>
      <Card.Body>
        {experienceList.length > 0 ? (
          experienceList.map(experience => (
            <Card
              key={experience._id}
              className="mb-3 p-2 border rounded shadow-sm experience-card"
            >
              <Row className="align-items-center">
                <Col xs={2}>
                  <Card.Img
                    src="https://static.licdn.com/aero-v1/sc/h/p4pvtlgggtwlz9lht17nvnqq"
                    className="img-esperienze rounded-circle"
                  />
                </Col>
                <Col xs={10}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title className="fw-bold mb-1">
                        {experience.company}
                      </Card.Title>
                      <Card.Text className="mb-1">{experience.role}</Card.Text>
                      <Card.Text className="mb-1 text-muted">
                        {experience.description}
                      </Card.Text>
                      <Card.Text className="mb-1 text-muted">
                        {experience.startDate} - {experience.endDate}
                      </Card.Text>
                      <Card.Text className="mb-1 text-muted">
                        {experience.area}
                      </Card.Text>
                    </div>
                    <div className="d-flex justify-content-between align-items-center">
                      <Link
                        to={`/modifica/${params.userID}/${experience._id}`}
                        className="btn btn-primary btn-sm me-2"
                      >
                        Modifica
                      </Link>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={() =>
                          dispatch(
                            deleteExperienceAction(user._id, experience._id)
                          )
                        }
                      >
                        Elimina
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          ))
        ) : (
          <Card.Text className="text-muted">
            Nessuna esperienza trovata.
          </Card.Text>
        )}
      </Card.Body>
      <ModalCreate show={modalShow} onHide={() => setModalShow(false)} />
      <div className="text-end mt-3">
        <Link to={`/profile`} className="btn btn-secondary">
          Torna al Profilo
        </Link>
      </div>
    </Card>
  )
}

export default EsperienzePage
