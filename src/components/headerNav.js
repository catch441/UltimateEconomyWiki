import '../css/main.css';
import '../css/headerNav.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

function HeaderNav() {
  return (
    <Navbar id="navbar-container" variant="light pills" expand="sm">
      <Navbar.Toggle id="toggle"/>
      <Navbar.Collapse>
        <Nav id="nav">
          <Nav.Item className="pill">
            <Nav.Link className="text">Lorem</Nav.Link>
          </Nav.Item>
          <Nav.Item className="pill">
            <Nav.Link className="text">Ipsum</Nav.Link>
          </Nav.Item>
          <Nav.Item className="pill">
            <Nav.Link className="text">Lucilio</Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default HeaderNav;
