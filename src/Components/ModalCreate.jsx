import { useState } from 'react'
import { Button, Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { CreateExperienceAction } from '../redux/actions/getExperienceAction'

const ModalCreate = props => {
  const [azienda, setAzienda] = useState('')
  const [descrizione, setDescrizione] = useState('')
  const [area, setArea] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [ruolo, setRuolo] = useState('')
  const dispatch = useDispatch()
  const user = useSelector(state => state.userMe.content)

  const handleAdd = () => {
    const expObj = {
      role: ruolo,
      company: azienda,
      startDate: startDate,
      endDate: endDate,
      description: descrizione,
      area: area,
    }

    dispatch(CreateExperienceAction(user._id, expObj))

    // Reset dei campi dopo l'aggiunta
    setAzienda('')
    setDescrizione('')
    setArea('')
    setStartDate('')
    setEndDate('')
    setRuolo('')
  }

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Aggiungi un'esperienza lavorativa
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column">
        <input
          type="text"
          placeholder="Ruolo"
          value={ruolo}
          onChange={e => setRuolo(e.target.value)}
          required
          className="form-control mb-3"
        />

        <input
          type="text"
          placeholder="Azienda"
          value={azienda}
          onChange={e => setAzienda(e.target.value)}
          required
          className="form-control mb-3"
        />

        <input
          type="text"
          placeholder="Descrizione"
          value={descrizione}
          onChange={e => setDescrizione(e.target.value)}
          required
          className="form-control mb-3"
        />

        <input
          type="text"
          placeholder="Area"
          value={area}
          onChange={e => setArea(e.target.value)}
          required
          className="form-control mb-3"
        />

        <input
          type="date"
          placeholder="Inizio lavoro"
          required
          value={startDate}
          onChange={e => setStartDate(e.target.value)}
          className="form-control mb-3"
        />

        <input
          type="date"
          placeholder="Fine lavoro"
          value={endDate}
          onChange={e => setEndDate(e.target.value)}
          className="form-control mb-3"
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide} className="me-3">
          Chiudi
        </Button>
        <Button onClick={() => handleAdd()} variant="success">
          Aggiungi
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalCreate
