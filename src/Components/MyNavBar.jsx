import { Col, Container, Form, Nav, Navbar } from 'react-bootstrap'
import '../MyNavBar.css'
import { Link, NavLink } from 'react-router-dom'

const MyNavBar = () => {
  return (
    <Navbar bg="white" className="NavbarCustom">
      <Container className="d-flex align-items-center ">
        <Col xs={1} className="text-end"></Col>
        <Col xs={3} className="d-flex">
          <img
            src="https://cdn.icon-icons.com/icons2/2415/PNG/512/linkedin_original_logo_icon_146435.png"
            alt=""
            className="avatarStyle"
          />
          <Form.Control
            className="SearchBar w-75 d-none d-lg-block"
            placeholder="Stefano Miceli"
            aria-label="Username"
          />
        </Col>
        <Col xs={8}>
          <Nav className="align-items-center mx-3">
            <div className="iconNavBar me-2">
              <NavLink
                className="navbarText"
                to="/"
                activeClassName="active"
                exact
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="rgb(102,102,102)"
                  className="mercado-match "
                  width="27"
                  height="30"
                  focusable="false"
                >
                  <path d="M23 9v2h-2v7a3 3 0 01-3 3h-4v-6h-4v6H6a3 3 0 01-3-3v-7H1V9l11-7z"></path>
                </svg>
                Home
              </NavLink>
            </div>
            <div className="iconNavBar">
              <NavLink
                className="navbarText pt-0"
                to="/network"
                activeClassName="active"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="rgb(102,102,102)"
                  className="mercado-match"
                  width="27"
                  height="30"
                  focusable="false"
                >
                  <path d="M12 16v6H3v-6a3 3 0 013-3h3a3 3 0 013 3zm5.5-3A3.5 3.5 0 1014 9.5a3.5 3.5 0 003.5 3.5zm1 2h-2a2.5 2.5 0 00-2.5 2.5V22h7v-4.5a2.5 2.5 0 00-2.5-2.5zM7.5 2A4.5 4.5 0 1012 6.5 4.49 4.49 0 007.5 2z"></path>
                </svg>
                Rete
              </NavLink>
            </div>
            <div className="iconNavBar">
              <NavLink
                className="navbarText pt-0"
                to="/jobs"
                activeClassName="active"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="rgb(102,102,102)"
                  className="mercado-match"
                  width="27"
                  height="30"
                  focusable="false"
                >
                  <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
                </svg>
                Lavoro
              </NavLink>
            </div>
            <div className="iconNavBar">
              <NavLink
                className="navbarText pt-0"
                to="/messaging"
                activeClassName="active"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="rgb(102,102,102)"
                  className="mercado-match"
                  width="27"
                  height="30"
                  focusable="false"
                >
                  <path d="M16 4H8a7 7 0 000 14h4v4l8.16-5.39A6.78 6.78 0 0023 11a7 7 0 00-7-7zm-8 8.25A1.25 1.25 0 119.25 11 1.25 1.25 0 018 12.25zm4 0A1.25 1.25 0 1113.25 11 1.25 1.25 0 0112 12.25zm4 0A1.25 1.25 0 1117.25 11 1.25 1.25 0 0116 12.25z"></path>
                </svg>{' '}
                Messaggistica
              </NavLink>
            </div>
            <div className="iconNavBar">
              <NavLink
                className="navbarText pt-0"
                to="/notifications"
                activeClassName="active"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="rgb(102,102,102)"
                  className="mercado-match"
                  width="27"
                  height="30"
                  focusable="false"
                >
                  <path d="M22 19h-8.28a2 2 0 11-3.44 0H2v-1a4.52 4.52 0 011.17-2.83l1-1.17h15.7l1 1.17A4.42 4.42 0 0122 18zM18.21 7.44A6.27 6.27 0 0012 2a6.27 6.27 0 00-6.21 5.44L5 13h14z"></path>
                </svg>{' '}
                Notifiche
              </NavLink>
            </div>
            <div className="iconNavBar">
              <NavLink
                className="navbarText pt-0"
                to="/profile"
                activeClassName="active"
              >
                <img
                  src="https://cdn.pixabay.com/photo/2016/08/08/09/17/avatar-1577909_960_720.png"
                  alt=""
                  className="avatarStyle rounded-circle"
                />
                Tu
              </NavLink>
            </div>
            <div className="  Aziende-part iconNavBar">
              <Link className="navbarText pt-0 ms-3">
                {' '}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  data-supported-dps="24x24"
                  fill="rgb(102,102,102)"
                  className="mercado-match"
                  width="27"
                  height="30"
                  focusable="false"
                >
                  <path d="M3 3h4v4H3zm7 4h4V3h-4zm7-4v4h4V3zM3 14h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4zM3 21h4v-4H3zm7 0h4v-4h-4zm7 0h4v-4h-4z"></path>
                </svg>{' '}
                Per aziende
              </Link>
            </div>
          </Nav>
        </Col>
      </Container>
    </Navbar>
  )
}

export default MyNavBar
