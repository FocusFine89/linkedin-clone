/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExperienceAction,
  getExperienceAction,
} from "../redux/actions/getExperienceAction";
import ModalCreate from "./ModalCreate";
import { Link, useParams } from "react-router-dom";

const EsperienzePage = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const experienceList = useSelector((state) => state.experienceList.content);
  const user = useSelector((state) => state.userMe.content);
  const params = useParams();

  useEffect(() => {
    dispatch(getExperienceAction(params.userID));
  }, []);

  useEffect(() => {}, [experienceList]);

  return (
    <Card className="card-experience position-relative">
      <Row className="ms-3 mt-3">
        <Col xs={1}>
          <Card.Title className="fw-bold  mt-2">Esperienza</Card.Title>
        </Col>
        <Col>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="black"
            className="bi bi-plus button-add"
            viewBox="0 0 16 16"
            onClick={() => setModalShow(true)}
          >
            <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4" />
          </svg>
        </Col>
      </Row>
      <Card.Body>
        {experienceList.length > 0 &&
          experienceList.map((experience) => {
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
                      <Link
                        to={`/modifica/${params.userID}/${experience._id}`}
                        className="bg-transparent border-0 text-dark rounded-5"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-pencil-square"
                          viewBox="0 0 16 16"
                        >
                          <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z" />
                          <path d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5z" />
                        </svg>
                      </Link>
                      <Button
                        variant="secondary"
                        className="bg-transparent border-0 text-dark"
                        onClick={() =>
                          deleteExperienceAction(user._id, experience._id)
                        }
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          fill="currentColor"
                          className="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                        </svg>
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
