import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import CustomLink from "../../CustomLink";
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
              <Nav.Link
                as={CustomLink}
                to="/home"
                className="text-xl text-white"
              >
                Home
              </Nav.Link>

              <Nav.Link
                as={CustomLink}
                to="/blog"
                className="text-xl text-white"
              >
                Blog
              </Nav.Link>
              <Nav.Link
                as={CustomLink}
                to="/about"
                className="text-xl text-white"
              >
                About
              </Nav.Link>

              {user ? (
                <button
                  className="text-white bg-blue-500 p-2 rounded"
                  onClick={() => signOut(auth)}
                >
                  LogOut
                </button>
              ) : (
                <Nav.Link
                  as={CustomLink}
                  to="/login"
                  className="text-xl text-white"
                >
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
