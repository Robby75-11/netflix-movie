import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Barnav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="py-0">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="p-0">
          <img
            src="/netflix_logo.png"
            alt="Netflix Logo"
            height="45"
            className="d-inline-block align-top"
            style={{ marginTop: "5px" }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto my-2 my-lg-0" navbarScroll>
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/tvshows">
              Serie TV
            </Nav.Link>
            <Nav.Link as={Link} to="/movies">
              Film
            </Nav.Link>
            <Nav.Link as={Link} to="/mylist">
              La mia lista
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barnav;
