import { Button, Col, Row } from "react-bootstrap";

const Sidebar = () => {
  return (
    <Row className="sidebar">
      <Col xs={12} md={2}>
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
              src="https://i.pinimg.com/originals/25/78/61/25786134576ce0344893b33a051160b1.jpg"
              alt=""
            />
            <div>
              <h5>Paolo rossi</h5>
              <p>Junior Web Developer</p>
              <p>React JS</p>
              <Button variant="outline-dark" className="rounded-pill">
                <i class="bi bi-plus"></i> Segui
              </Button>
            </div>
          </div>

          <hr />
          <div className="d-flex gx-2">
            <img
              className="avatarStyle rounded-circle me-2"
              src="https://avatarfiles.alphacoders.com/930/93048.png"
              alt=""
            />
            <div>
              <h5>Anna Vinci</h5>
              <p>Junior Web Developer</p>
              <p>JS BOOTSTRAP REACT</p>
              <Button variant="outline-dark" className="rounded-pill">
                <i class="bi bi-plus"></i> Segui
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
              <h5>Andrea Verdi</h5>
              <p>Front End Developer</p>
              <p>React JS</p>
              <Button variant="outline-dark" className="rounded-pill">
                <i class="bi bi-send-fill"></i> Messaggio
              </Button>
            </div>
          </div>
          <hr />
          <div className="d-flex gx-2">
            <img
              className="avatarStyle rounded-circle me-2"
              src="https://i.pinimg.com/736x/7f/79/6d/7f796d57218d9cd81a92d9e6e8e51ce4--free-avatars-online-profile.jpg"
              alt=""
            />
            <div>
              <h5>Giulia Lancia</h5>
              <p>Back End Junior Developer</p>
              <p>JAVA </p>
              <Button variant="outline-dark" className="rounded-pill">
                <i class="bi bi-plus"></i> Segui
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
              <h5>Giulio Troisi</h5>
              <p>Junior Web Developer</p>
              <p>React JS</p>
              <Button variant="outline-dark" className="rounded-pill">
                <i class="bi bi-plus"></i> Segui
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
              <h5>Simone Rossini</h5>
              <p>Junior Web Developer</p>
              <p>Angular</p>
              <Button variant="outline-dark" className="rounded-pill">
                <i class="bi bi-send-fill"></i> Messaggio
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
              <h5>Sara Ciondoli</h5>
              <p>Junior Web Developer</p>
              <p>Angular .NET</p>
              <Button variant="outline-dark" className="rounded-pill">
                <i class="bi bi-send-fill"></i> Messaggio
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
              <h5>Tiziano Franceschini</h5>
              <p>Junior Web Developer</p>
              <p>React JS</p>
              <Button variant="outline-dark" className="rounded-pill">
                <i class="bi bi-plus"></i> Segui
              </Button>
            </div>
          </div>
        </div>
      </Col>
    </Row>
  );
};

export default Sidebar;
