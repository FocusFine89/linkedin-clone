import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import {
  CreateExperienceAction,
  saveExperienceAction,
} from "../redux/actions/getExperienceAction";

const ModalCreate = (props) => {
  const [expObj, setExpObj] = useState(null);

  const [azienda, setAzienda] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [area, setArea] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ruolo, setRuolo] = useState("");
  const dispatch = useDispatch();
  const user = useSelector((state) => state.userMe.content);
  const saveExp = useSelector((state) => state.createExperience.content);

  const handleAdd = () => {
    setExpObj({
      ...expObj,
      role: ruolo,
      company: azienda,
      startDate: startDate,
      endDate: endDate,
      description: descrizione,
      area: area,
    });
    expObj &&
      dispatch(saveExperienceAction(expObj)) &&
      dispatch(CreateExperienceAction(user._id, saveExp));
  };

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
        <Button type="button" onClick={props.onHide} className="me-3">
          Close
        </Button>
        <Button type="button" onClick={() => handleAdd()}>
          Add
        </Button>
      </Modal.Footer>
    </Modal>
  );
};
export default ModalCreate;
