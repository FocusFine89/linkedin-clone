import { useEffect } from "react";
import { Button, Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { getListOfProfileAction } from "../redux/actions";

const Sidebar = () => {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.sidebar.content);
  console.log(profiles);
  useEffect(() => {
    dispatch(getListOfProfileAction());
  }, []);
  return (
    <Row className="sidebar bg-light">
      <div className="d-flex justify-content-between">
        <Button variant="success" className="rounded-pill">
          Italiano
        </Button>
        <Button variant="outline-dark" className="rounded-pill">
          Inglese
        </Button>
      </div>
      <div>
        <h5>Altri profili simili</h5>
      </div>
      {profiles.length > 0 &&
        profiles.slice(0, 4).map((singleProfile) => {
          return (
            <Col xs={12} md={12}>
              <div className="mt-3  ">
                <div className="d-flex gx-2">
                  <img
                    className="avatarStyle rounded-circle me-2"
                    src={singleProfile.image}
                    alt=""
                  />
                  <div>
                    <h5>
                      {singleProfile.name} {singleProfile.surname}
                    </h5>
                    <p>{singleProfile.title}</p>

                    <Button variant="outline-dark" className="rounded-pill">
                      <i className="bi bi-plus"></i> Segui
                    </Button>
                  </div>
                </div>

                <hr />
              </div>
            </Col>
          );
        })}
      ;<h5>Persone che potresti conoscere</h5>
      {profiles.slice(4, 8).map((singleProfile) => {
        return (
          <Col xs={12} md={12}>
            <div className="mt-3 ">
              <div className="d-flex gx-2">
                <img
                  className="avatarStyle rounded-circle me-2"
                  src={singleProfile.image}
                  alt=""
                />
                <div>
                  <h5>
                    {singleProfile.name} {singleProfile.surname}
                  </h5>
                  <p>{singleProfile.title}</p>

                  <Button variant="outline-dark" className="rounded-pill">
                    <i className="bi bi-plus"></i> Segui
                  </Button>
                </div>
              </div>

              <hr />
            </div>
          </Col>
        );
      })}
    </Row>
  );
};

export default Sidebar;
