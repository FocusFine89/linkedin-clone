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
      {profiles.length > 0 && (
        <Col xs={12} md={12}>
          <div className="d-flex justify-content-between">
            <Button variant="success" className="rounded-pill">
              Italiano
            </Button>
            <Button variant="outline-dark" className="rounded-pill">
              Inglese
            </Button>
          </div>
          <div className="mt-3 border border-light-subtle rounded-3">
            <h5>Altri profili simili</h5>
            <div className="d-flex gx-2">
              <img
                className="avatarStyle rounded-circle me-2"
                src={profiles[0].image}
                alt=""
              />
              <div>
                <h5>
                  {profiles[0].name} {profiles[0].surname}
                </h5>
                <p>Junior Web Developer</p>
                <p>React JS</p>
                <Button variant="outline-dark" className="rounded-pill">
                  <i className="bi bi-plus"></i> Segui
                </Button>
              </div>
            </div>

            <hr />
            <div className="d-flex gx-2">
              <img
                className="avatarStyle rounded-circle me-2"
                src={profiles[1].image}
                alt=""
              />
              <div>
                <h5> Marina Rossi</h5>
                <p>Full Stack Web Developer</p>
                <p>JS BOOTSTRAP REACT</p>
                <Button variant="outline-dark" className="rounded-pill">
                  <i className="bi bi-plus"></i> Segui
                </Button>
              </div>
            </div>
            <hr />
            <div className="d-flex gx-2">
              <img
                className="avatarStyle rounded-circle me-2"
                src="https://www.disneyplusinformer.com/wp-content/uploads/2021/06/Luca-Profile-Avatars-3.png"
                alt=""
              />
              <div>
                <h5>
                  {" "}
                  {profiles[2].name} {profiles[2].surname}
                </h5>
                <p>{profiles[2].title}</p>
                <p>Angular</p>
                <Button variant="outline-dark" className="rounded-pill">
                  <i className="bi bi-send-fill"></i> Messaggio
                </Button>
              </div>
            </div>
            <hr />
            <div className="d-flex gx-2">
              <img
                className="avatarStyle rounded-circle me-2"
                src={profiles[3].image}
                alt=""
              />
              <div>
                <h5>
                  {profiles[3].name} {profiles[3].surname}
                </h5>
                <p>{profiles[3].title}</p>
                <p>JAVA </p>
                <Button variant="outline-dark" className="rounded-pill">
                  <i className="bi bi-plus"></i> Segui
                </Button>
              </div>
            </div>
          </div>
          <div className="mt-3 border border-light-subtle rounded-3 ">
            <h5>Persone che potresti conoscere</h5>
            <div className="d-flex gx-2">
              <img
                className="avatarStyle rounded-circle me-2"
                src="https://www.pngitem.com/pimgs/m/41-415019_profile-man-male-free-picture-male-avatar-clipart.png"
                alt=""
              />
              <div>
                <h5>
                  {" "}
                  {profiles[4].name} {profiles[4].surname}
                </h5>
                <p>{profiles[4].title}</p>
                <p>React JS</p>
                <Button variant="outline-dark" className="rounded-pill">
                  <i className="bi bi-plus"></i> Segui
                </Button>
              </div>
            </div>

            <hr />
            <div className="d-flex gx-2">
              <img
                className="avatarStyle rounded-circle me-2"
                src="https://avatarfiles.alphacoders.com/951/95106.jpg"
                alt=""
              />
              <div>
                <h5>
                  {" "}
                  {profiles[5].name} {profiles[5].surname}
                </h5>
                <p>{profiles[5].title}</p>
                <p>Angular</p>
                <Button variant="outline-dark" className="rounded-pill">
                  <i className="bi bi-send-fill"></i> Messaggio
                </Button>
              </div>
            </div>
            <hr />
            <div className="d-flex gx-2">
              <img
                className="avatarStyle rounded-circle me-2"
                src="https://thumbs.dreamstime.com/b/young-woman-avatar-cartoon-character-profile-picture-young-woman-wearing-blue-t-shirt-bandana-avatar-cartoon-character-149672072.jpg"
                alt=""
              />
              <div>
                <h5>
                  {profiles[6].name} {profiles[6].surname}
                </h5>
                <p>{profiles[6].title}</p>
                <p>Angular .NET</p>
                <Button variant="outline-dark" className="rounded-pill">
                  <i className="bi bi-send-fill"></i> Messaggio
                </Button>
              </div>
            </div>
            <hr />
            <div className="d-flex gx-2">
              <img
                className="avatarStyle rounded-circle me-2"
                src="https://avatarfiles.alphacoders.com/225/225928.jpg"
                alt=""
              />
              <div>
                <h5>
                  {profiles[7].name} {profiles[7].surname}
                </h5>
                <p>{profiles[7].title}</p>
                <p>React JS</p>
                <Button variant="outline-dark" className="rounded-pill">
                  <i className="bi bi-plus"></i> Segui
                </Button>
              </div>
            </div>
          </div>
        </Col>
      )}
    </Row>
  );
};

export default Sidebar;
