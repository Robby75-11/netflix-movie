import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Barnav() {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="py-0">
      {" "}
      {/* Aggiunto py-0 per ridurre il padding verticale */}
      <Container fluid className="align-items-start">
        {" "}
        {/* Allinea gli elementi all'inizio verticalmente */}
        <Navbar.Brand href="/" className="p-0">
          {" "}
          {/* Rimosso il padding dal brand */}
          <img
            src="/netflix_logo.png"
            alt="Netflix Logo"
            height="45" // Regola l'altezza a tuo piacimento
            className="d-inline-block align-top"
            style={{ marginTop: "5px" }} // Aggiunto un po' di margine superiore per allineamento
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#tvshows">Serie TV</Nav.Link>
            <Nav.Link href="#movies">Film</Nav.Link>
            <Nav.Link href="#latest">Ultime Novità</Nav.Link>
            <Nav.Link href="#mylist">La mia lista</Nav.Link>
          </Nav>
          {/* Puoi aggiungere qui la Form per la ricerca se la vuoi nella navbar */}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Barnav;
