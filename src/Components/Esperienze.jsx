/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteExperienceAction,
  getExperienceAction,
} from "../redux/actions/getExperienceAction";
import ModalCreate from "./ModalCreate";
import { Link } from "react-router-dom";

const Esperienze = () => {
  const [modalShow, setModalShow] = useState(false);
  const dispatch = useDispatch();
  const experienceList = useSelector((state) => state.experienceList.content);
  const user = useSelector((state) => state.userMe.content);

  useEffect(() => {
    dispatch(getExperienceAction(user._id));
  }, []);

  return (
    <Card className="card-experience my-4 p-3 position-relative bg-light ">
      <Row className="align-items-center">
        <Col xs={8}>
          <Card.Title className="fw-bold">Esperienze</Card.Title>
        </Col>
        <Col xs={4} className="text-end">
          <img
            src="./plus.svg"
            alt="Add Experience"
            className="button-add cursor-pointer bg-light"
            onClick={() => setModalShow(true)}
          />
        </Col>
      </Row>

      <Card.Body>
        {experienceList.length > 0 &&
          experienceList.slice(0, 4).map((experience) => (
            <Card
              key={experience._id}
              className="mb-3 p-2 border rounded shadow-sm"
            >
              <Row className="align-items-center">
                <Col xs={2}>
                  <Card.Img
                    src="https://static.licdn.com/aero-v1/sc/h/p4pvtlgggtwlz9lht17nvnqq"
                    className="img-esperienze rounded-circle"
                  />
                </Col>
                <Col xs={10}>
                  <div className="d-flex justify-content-between align-items-center">
                    <div>
                      <Card.Title className="fw-bold mb-1">
                        {experience.company}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {experience.role}
                      </Card.Subtitle>
                      <Card.Text className="mb-1 text-muted">
                        {experience.description}
                      </Card.Text>
                      <Card.Text className="mb-1 text-muted">
                        {experience.startDate} - {experience.endDate}
                      </Card.Text>
                      <Card.Text className="mb-1 text-muted">
                        {experience.area}
                      </Card.Text>
                    </div>
                    <div className="d-flex align-items-center">
                      <Link
                        to={`/modifica/${user._id}/${experience._id}`}
                        className="text-primary me-2"
                      >
                        <img src="./pencil-square.svg" alt="Edit" />
                      </Link>
                      <Button
                        variant="outline-danger"
                        size="sm"
                        className=" border-0"
                        onClick={() =>
                          dispatch(
                            deleteExperienceAction(user._id, experience._id)
                          )
                        }
                      >
                        <img src="./trash3.svg" alt="Delete" />
                      </Button>
                    </div>
                  </div>
                </Col>
              </Row>
            </Card>
          ))}
      </Card.Body>

      <ModalCreate show={modalShow} onHide={() => setModalShow(false)} />

      {experienceList.length > 4 && (
        <Link
          to={`/experience/${user._id}`}
          className="btn btn-light w-100 mt-2"
        >
          Show More...
        </Link>
      )}
    </Card>
  );
};

export default Esperienze;
