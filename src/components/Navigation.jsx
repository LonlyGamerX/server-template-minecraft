import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../imgs/logo.png";

const Navigation = () => {
  return (
    <Navbar className="d-flex navbar" expand="lg">
      <Navbar.Brand href="/" className="text-white">
        <img src={logo} className="img-fluid w-25" alt="logo" />
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="w-100 text-center justify-content-end p-2">
        <Nav className="white-outline">
          <Nav.Link href="/staff" className="me-3 text-white">
            Staff
          </Nav.Link>
          <Nav.Link href="/forms" className="me-2 text-white">
            Forms
          </Nav.Link>
          <Nav.Link href="/store" className="me-2 text-white">
            Store
          </Nav.Link>
          <Nav.Link href="/contact" className="me-2 text-white">
            Contact Us
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
