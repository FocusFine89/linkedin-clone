import { useEffect, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificExperienceAction } from "../redux/actions/getExperienceAction";
import { useParams } from "react-router-dom";
import { Card, Col, Row } from "react-bootstrap";

function ModificaEsperienze() {
  const [azienda, setAzienda] = useState("");
  const [descrizione, setDescrizione] = useState("");
  const [area, setArea] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [ruolo, setRuolo] = useState("");
  const dispatch = useDispatch();
  const params = useParams();
  const specific = useSelector(
    (state) => state.experienceList.specificExperience
  );

  useEffect(() => {
    dispatch(getSpecificExperienceAction(params.userID, params.expID));
  }, []);

  return (
    <Card className="card-experience position-relative">
      <Row className="ms-3 mt-3">
        <Col xs={1}>
          <Card.Title className="fw-bold  mt-2">Esperienza</Card.Title>
        </Col>
      </Row>
      {specific && (
        <Card.Body>
          <Card className=" border-bottom-1">
            <Row className="align-items-center">
              <Col xs={2}>
                <Card.Img
                  src="https://static.licdn.com/aero-v1/sc/h/p4pvtlgggtwlz9lht17nvnqq"
                  className="img-esperienze ms-3"
                />
              </Col>
              <Col xs={10} className="position-relative">
                <Card.Title className="">{specific.company}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  {specific.role}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {specific.description}
                </Card.Subtitle>

                <Card.Subtitle className="mb-2 text-muted">
                  {specific.startDate}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {specific.endDate}
                </Card.Subtitle>
                <Card.Subtitle className="mb-2 text-muted">
                  {specific.area}
                </Card.Subtitle>
              </Col>
            </Row>
          </Card>
        </Card.Body>
      )}
    </Card>
  );
}

export default ModificaEsperienze;
