import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificExperienceAction } from "../redux/actions/getExperienceAction";

function ModificaEsperienze(props) {
  const [azienda, setAzienda] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [area, setArea] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ruolo, setRuolo] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userMe.content);
  const [specific, setSpecific] = useState();

  useEffect(() => {}, []);

  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Modifica Esperienza
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="d-flex flex-column w-50">
        <input
          type="text"
          placeholder="Ruolo"
          value={ruolo}
          onChange={(e) => setRuolo(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Azienda"
          value={azienda}
          onChange={(e) => setAzienda(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Descrizione"
          value={descrizione}
          onChange={(e) => setDescrizione(e.target.value)}
          required
        />

        <input
          type="text"
          placeholder="Area"
          value={area}
          onChange={(e) => setArea(e.target.value)}
          required
        />

        <input
          type="date"
          placeholder="Inizio lavoro"
          required
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
        />

        <input
          type="date"
          placeholder="Fine lavoro"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
        />
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ModificaEsperienze;
