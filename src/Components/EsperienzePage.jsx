/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExperienceAction,
  getExperienceAction,
} from "../redux/actions/getExperienceAction";
import ModalCreate from "./ModalCreate";

const EsperienzePage = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const experienceList = useSelector((state) => state.experienceList.content);
  const user = useSelector((state) => state.userMe.content);

  useEffect(() => {
    dispatch(getExperienceAction(user._id));
  }, []);

  useEffect(() => {}, [experienceList]);

  return (
    <Card className="card-experience position-relative">
      <Row className="ms-3 mt-3">
        <Col xs={1}>
          <Card.Title className="fw-bold  mt-2">Esperienza</Card.Title>
        </Col>
        <Col>
          <img
            src="./plus.svg"
            alt=""
            className="button-add"
            onClick={() => setModalShow(true)}
          />
        </Col>
      </Row>
      <Card.Body>
        {experienceList.length > 0 &&
          experienceList.map((experience, i) => {
            return (
              <Card key={experience._id} className=" border-bottom-1">
                <Row className="align-items-center">
                  <Col xs={2}>
                    <Card.Img
                      src="https://static.licdn.com/aero-v1/sc/h/p4pvtlgggtwlz9lht17nvnqq"
                      className="img-esperienze ms-3"
                    />
                  </Col>
                  <Col xs={10} className="position-relative">
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
                    <div className="position-absolute button-group-experience">
                      <Button className="bg-transparent border-0 text-dark rounded-5">
                        <img src="./pencil-square.svg" alt="" />
                      </Button>
                      <Button
                        variant="secondary"
                        className="bg-transparent border-0 text-dark"
                        onClick={() =>
                          deleteExperienceAction(user._id, experience._id)
                        }
                      >
                        <img src="./trash3.svg" alt="" />
                      </Button>
                    </div>
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

export default EsperienzePage;
