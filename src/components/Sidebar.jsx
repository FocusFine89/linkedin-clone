import { useEffect } from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { getListOfProfileAction } from '../redux/actions'

const Sidebar = () => {
  const dispatch = useDispatch()
  const profiles = useSelector(state => state.sidebar.content)

  useEffect(() => {
    dispatch(getListOfProfileAction())
  }, [])

  return (
    <div className="sidebar p-1  mt-1">
      <Row className="mb-4">
        <Col>
          <Card>
            <Card.Body>
              <h5 className="mb-2">Altri profili simili</h5>
              {profiles.length > 0 &&
                profiles.slice(0, 4).map((singleProfile, index) => (
                  <div key={index} className="mt-3">
                    <div className="d-flex gx-2 align-items-center">
                      <img
                        className="avatarStyle rounded-circle me-3"
                        src={singleProfile.image}
                        alt=""
                      />
                      <div>
                        <h5>
                          {singleProfile.name} {singleProfile.surname}
                        </h5>
                        <p className="mb-1">{singleProfile.title}</p>
                        <Button variant="outline-dark" className="rounded-pill">
                          <i className="bi bi-plus"></i> Segui
                        </Button>
                      </div>
                    </div>
                    <hr className="my-3" />
                  </div>
                ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Row>
        <Col>
          <Card>
            <Card.Body>
              <h5 className="mb-3">Persone che potresti conoscere</h5>
              {profiles.length > 0 &&
                profiles.slice(4, 8).map((singleProfile, index) => (
                  <div key={index} className="mt-3">
                    <div className="d-flex gx-2 align-items-center">
                      <img
                        className="avatarStyle rounded-circle me-3"
                        src={singleProfile.image}
                        alt=""
                      />
                      <div>
                        <h5>
                          {singleProfile.name} {singleProfile.surname}
                        </h5>
                        <p className="mb-1">{singleProfile.title}</p>
                        <Button variant="outline-dark" className="rounded-pill">
                          <i className="bi bi-plus"></i> Segui
                        </Button>
                      </div>
                    </div>
                    <hr className="my-3" />
                  </div>
                ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  )
}

export default Sidebar
