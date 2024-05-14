/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getExperienceAction } from "../redux/actions/getExperienceAction";
import ModalCreate from "./ModalCreate";

const Esperienze = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const experienceList = useSelector((state) => state.experienceList.content);
  const user = useSelector((state) => state.userMe.content);

  useEffect(() => {
    dispatch(getExperienceAction(user._id));
  }, []);

  return (
    <Card className="border border-dark mt-5  card-experience position-relative">
      <div className="position-absolute button-card">
        <Button
          variant="secondary"
          className="bg-transparent border-0 text-dark"
          onClick={() => setModalShow(true)}
        >
          <span className="btn btn-secondary">Crea</span>
        </Button>

        <Button className="bg-transparent border-0 text-dark">
          <span className="btn btn-secondary">Modifica</span>
        </Button>
        <Button
          variant="secondary"
          className="bg-transparent border-0 text-dark"
        >
          <span className="btn btn-danger">Elimina</span>
        </Button>
      </div>
      <Card.Body>
        {experienceList.length > 0 &&
          experienceList.slice(0, 4).map((experience) => {
            return (
              <Card key={experience._id} className=" border-bottom-1">
                <Row className="align-items-center">
                  <Col xs={2}>
                    <Card.Img
                      src="https://static.licdn.com/aero-v1/sc/h/p4pvtlgggtwlz9lht17nvnqq"
                      className="img-esperienze ms-3"
                    />
                  </Col>
                  <Col xs={10}>
                    <Card.Title className="">{experience.comany}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                      {experience.role}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      {experience.description}
                    </Card.Subtitle>

                    <Card.Subtitle className="mb-2 text-muted">
                      {experience.startDate}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      {experience.endDate}
                    </Card.Subtitle>
                    <Card.Subtitle className="mb-2 text-muted">
                      {experience.area}
                    </Card.Subtitle>
                  </Col>
                </Row>
              </Card>
            );
          })}
      </Card.Body>
      <ModalCreate show={modalShow} onHide={() => setModalShow(false)} />
    </Card>
  );
};

export default Esperienze;
