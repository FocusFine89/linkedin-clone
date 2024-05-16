import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";

import { Link, useParams } from "react-router-dom";
import { Alert, Card, Col, Row } from "react-bootstrap";

function ModificaEsperienze() {
  const [azienda, setAzienda] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [area, setArea] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ruolo, setRuolo] = useState("");
  const [modificato, setModificato] = useState(false);

  const params = useParams();

  const ModifieSpecificExperienceAction = (id_user, expId) => {
    const expObj = {
      role: ruolo,
      company: azienda,
      startDate: startDate,
      endDate: endDate,
      description: descrizione,
      area: area,
    };
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id_user}/experiences/${expId}`,
      {
        method: "PUT",
        body: JSON.stringify(expObj),
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmVmMjE2N2U1MzAwMTVmYTY5NzQiLCJpYXQiOjE3MTU1ODQ3NTQsImV4cCI6MTcxNjc5NDM1NH0.woy53zt1_zmruJl4tAXEXJzDTX-iJFUOCihD3MU3Coc",
        },
      }
    ).then((response) => {
      if (response.ok) {
        setModificato(true);
        console.log("ok");
      }
    });
  };

  const getSpecificExperienceAction = (id_user, expid) => {
    fetch(
      `https://striveschool-api.herokuapp.com/api/profile/${id_user}/experiences/${expid}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQxYmVmMjE2N2U1MzAwMTVmYTY5NzQiLCJpYXQiOjE3MTU1ODQ3NTQsImV4cCI6MTcxNjc5NDM1NH0.woy53zt1_zmruJl4tAXEXJzDTX-iJFUOCihD3MU3Coc",
        },
      }
    )
      .then((response) => {
        if (response.ok) {
          return response.json();
        }
      })
      .then((response) => {
        const dateStart = response.startDate.split("T");
        const dateEnd = response.endDate.split("T");
        setAzienda(response.company);
        setDescrizione(response.description);
        setArea(response.area);
        setStartDate(dateStart[0]);
        setEndDate(dateEnd[0]);
        setRuolo(response.role);
        console.log(dateStart, dateEnd);
        console.log(startDate);
        console.log(endDate);
      });
  };

  useEffect(() => {
    // dispatch(getSpecificExperienceAction(params.userID, params.expID));
    //aggiungi la fetch qui
    getSpecificExperienceAction(params.userID, params.expID);
  }, []);

  return (
    <Card className="card-experience position-relative">
      <Row className="ms-3 mt-3">
        <Col xs={1}>
          <Card.Title className="fw-bold  mt-2">Esperienza</Card.Title>
        </Col>
      </Row>

      <Card.Body>
        <Card className=" border-bottom-1">
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
              <label htmlFor="azienda">Azienda:</label>
              <input
                className="mb-2"
                type="text"
                id="azienda"
                value={azienda}
                onChange={(e) => setAzienda(e.target.value)}
              ></input>
              <label htmlFor="ruolo">Ruolo:</label>
              <input
                id="ruolo"
                className="mb-2 text-muted"
                type="text"
                value={ruolo}
                onChange={(e) => setRuolo(e.target.value)}
              ></input>
              <label htmlFor="desc">Descrizione:</label>
              <input
                id="desc"
                className="mb-2 text-muted"
                type="text"
                value={descrizione}
                onChange={(e) => setDescrizione(e.target.value)}
              ></input>

              <label htmlFor="area">Area:</label>
              <input
                id="area"
                className="mb-2 text-muted"
                type="text"
                value={area}
                onChange={(e) => setArea(e.target.value)}
              ></input>
              <Button
                type="button"
                className="btn btn-success "
                onClick={() =>
                  ModifieSpecificExperienceAction(params.userID, params.expID)
                }
              >
                Modifica
              </Button>
            </Col>
          </Row>
          {modificato && (
            <Alert variant="success" className="mt-3">
              hai modificato l'esperienza,{" "}
              <Link to="/profile">Torna al tuo Profilo</Link>{" "}
            </Alert>
          )}
        </Card>
      </Card.Body>
    </Card>
  );
}

export default ModificaEsperienze;
