import { useEffect, useState } from 'react'
import { Button, Card, Col, Row, Alert } from 'react-bootstrap'
import { Link, useParams } from 'react-router-dom'
import '../ModificaEsperienze.css'

function ModificaEsperienze() {
  const [azienda, setAzienda] = useState('')
  const [descrizione, setDescrizione] = useState('')
  const [area, setArea] = useState('')
  const [ruolo, setRuolo] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [modificato, setModificato] = useState(false)
  const params = useParams()

  const ModifieSpecificExperienceAction = (id_user, expId) => {
    const expObj = {
      role: ruolo,
      company: azienda,
      startDate: startDate,
      endDate: endDate,
      description: descrizione,
      area: area,
    }

    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id_user}/experiences/${expId}`,
      {
        method: 'PUT',
        body: JSON.stringify(expObj),
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmVmMjE2N2U1MzAwMTVmYTY5NzQiLCJpYXQiOjE3MTU1ODQ3NTQsImV4cCI6MTcxNjc5NDM1NH0.woy53zt1_zmruJl4tAXEXJzDTX-iJFUOCihD3MU3Coc',
        },
      }
    ).then(response => {
      if (response.ok) {
        setModificato(true)
        console.log('ok')
      }
    })
  }

  const getSpecificExperienceAction = (id_user, expid) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id_user}/experiences/${expid}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmVmMjE2N2U1MzAwMTVmYTY5NzQiLCJpYXQiOjE3MTU1ODQ3NTQsImV4cCI6MTcxNjc5NDM1NH0.woy53zt1_zmruJl4tAXEXJzDTX-iJFUOCihD3MU3Coc',
        },
      }
    )
      .then(response => {
        if (response.ok) {
          return response.json()
        }
      })
      .then(response => {
        const dateStart = response.startDate.split('T')[0]
        const dateEnd = response.endDate.split('T')[0]
        setAzienda(response.company)
        setDescrizione(response.description)
        setArea(response.area)
        setStartDate(dateStart)
        setEndDate(dateEnd)
        setRuolo(response.role)
      })
  }

  useEffect(() => {
    getSpecificExperienceAction(params.userID, params.expID)
  }, [])

  return (
    <Card className="card-experience text-center">
      <Row className="ms-3 mt-3">
        <Col xs={12}>
          <Card.Title className="fw-bold mt-2">Modifica Esperienza</Card.Title>
        </Col>
      </Row>
      <Card.Body>
        <Card className="border-0 mb-3">
          <Row className="align-items-center">
            <Col xs={2}>
              <Card.Img
                src="https://static.licdn.com/aero-v1/sc/h/p4pvtlgggtwlz9lht17nvnqq"
                className="img-esperienze ms-3"
              />
            </Col>
            <Col
              xs={10}
              className="position-relative d-flex flex-column mod-exp"
            >
              <label htmlFor="azienda" className="mb-2">
                Azienda:
              </label>
              <input
                id="azienda"
                className="form-control mb-3"
                type="text"
                value={azienda}
                onChange={e => setAzienda(e.target.value)}
              />
              <label htmlFor="ruolo" className="mb-2">
                Ruolo:
              </label>
              <input
                id="ruolo"
                className="form-control mb-3"
                type="text"
                value={ruolo}
                onChange={e => setRuolo(e.target.value)}
              />
              <label htmlFor="descrizione" className="mb-2">
                Descrizione:
              </label>
              <input
                id="descrizione"
                className="form-control mb-3"
                type="text"
                value={descrizione}
                onChange={e => setDescrizione(e.target.value)}
              />
              <label htmlFor="area" className="mb-2">
                Area:
              </label>
              <input
                id="area"
                className="form-control mb-3"
                type="text"
                value={area}
                onChange={e => setArea(e.target.value)}
              />
              <Button
                type="button"
                className="btn btn-success align-self-start"
                onClick={() =>
                  ModifieSpecificExperienceAction(params.userID, params.expID)
                }
              >
                Modifica
              </Button>
            </Col>
          </Row>
        </Card>
        {modificato && (
          <Alert variant="success" className="mt-3">
            Esperienza modificata con successo!{' '}
            <Link to="/profile">Torna al tuo profilo</Link>
          </Alert>
        )}
      </Card.Body>
    </Card>
  )
}

export default ModificaEsperienze
