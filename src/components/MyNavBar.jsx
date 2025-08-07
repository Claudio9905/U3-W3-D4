import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link, useLocation } from "react-router-dom";

const MyNavBar = () => {
  const location = useLocation();
  console.log("Location", location);

  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container fluid>
          <div className="border border-1 border-dark rounded-3 shadow-lg p-1">
            <Link to="/" className="text-decoration-none text-dark">
              Search-Jobs
            </Link>
          </div>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-3">
              <Link to="/" className="text-decoration-none text-dark me-2">
                Home
              </Link>
              <Link to="/favourites" className="text-decoration-none text-dark">
                Favourites
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default MyNavBar;
