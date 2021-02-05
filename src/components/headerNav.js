import '../css/main.css';
import '../css/headerNav.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropDown';
import {
  Link
} from "react-router-dom";

function HeaderNav() {
  return (
    <div>
      <div className="bar" />
      <Navbar id="navbar-container" variant="light pills" expand="sm">
        <Navbar.Toggle id="toggle"/>
        <Navbar.Collapse>
          <Nav id="nav">
            <Nav.Item className="pill">
              <Nav.Link><Link to="/plugin-info" className="text">Plugin Info</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item className="pill">
              <Nav.Link><Link to="/about" className="text">About</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item className="pill">
              <Nav.Link ><Link to="/faq" className="text">FAQ</Link></Nav.Link>
            </Nav.Item>
            <Nav.Item className="pill">
              <Nav.Link><a href="https://github.com/catch441/Ultimate_Economy/archive/master.zip" className="text">Download</a></Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="bar" />
     </div>
  );
}

export default HeaderNav;
