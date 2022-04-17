import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="">
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
              <Nav.Link href="/home">Home</Nav.Link>
              <Nav.Link href="/home#services">Services</Nav.Link>
              <Nav.Link href="/home#feedback">FeedBack</Nav.Link>

              <Nav.Link as={Link} to="/blog">
                Blog
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link href="/home#contact">Contact</Nav.Link>
              {user ? (
                <button className="text-white" onClick={() => signOut(auth)}>
                  LogOut
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
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
