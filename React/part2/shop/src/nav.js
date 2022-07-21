import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function Navb() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Navbar</Navbar.Brand>
        <Nav className="me-auto">
          <Link to="/">Home</Link>
          <Link to="/detail">Detail</Link>
        </Nav>
      </Container>
    </Navbar>
  );
}
