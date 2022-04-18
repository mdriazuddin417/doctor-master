import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="sticky top-0 z-50">
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={Link} to="/home">
            <div className="flex gap-2">
              <img src={logo} alt="" width={30} />
              Master Doctor
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/home" className="link">
                Home
              </Nav.Link>
              <Nav.Link href="/home#services">Services</Nav.Link>
              <Nav.Link href="/home#feedback">FeedBack</Nav.Link>

              <Nav.Link as={Link} to="/blog" className="link">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about" className="link">
                About
              </Nav.Link>
              <Nav.Link href="/home#contact" className="link">
                Contact
              </Nav.Link>
              {user ? (
                <button
                  className="text-white bg-blue-500 p-2 rounded"
                  onClick={() => signOut(auth)}
                >
                  LogOut
                </button>
              ) : (
                <Nav.Link as={Link} to="/login" className="link">
                  Log In
                </Nav.Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
