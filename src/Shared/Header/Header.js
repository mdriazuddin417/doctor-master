import React from "react";

import { Link, NavLink } from "react-router-dom";
import logo from "../../images/logo.png";
import { useAuthState } from "react-firebase-hooks/auth";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";

import "./Header.css";
const Header = () => {
  const [user] = useAuthState(auth);
  return (
    <div className="">
      <div class="navbar bg-base-100">
        <div class="flex-1">
          <Link to={"/"} class="btn btn-ghost normal-case text-xl">
            Master Doctor
          </Link>
        </div>
        <div class="flex-none">
          <ul class="menu menu-horizontal p-0 space-x-3">
            <li>
              <NavLink to={"/home"}>Home</NavLink>
            </li>
            <li>
              <NavLink to={"/about"}>About</NavLink>
            </li>
            <li>
              <NavLink to={"/blog"}>Blog</NavLink>
            </li>

            <div class="dropdown dropdown-end ">
              <label tabIndex="0" class="btn btn-ghost btn-circle">
                <div class="indicator">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <span class="badge badge-sm indicator-item">8</span>
                </div>
              </label>

              <div
                tabIndex="0"
                class="mt-3 card card-compact dropdown-content w-52 bg-base-100 shadow"
              >
                <div class="card-body">
                  <span class="font-bold text-lg">8 Items</span>
                  <span class="text-info">Subtotal: $999</span>
                  <div class="card-actions">
                    <Link to={"/checkout"}>
                      <button class="btn btn-primary btn-block">
                        View cart
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {!user ? (
              <li>
                <NavLink to={"/login"}>Login</NavLink>
              </li>
            ) : (
              <>
                <div class="dropdown dropdown-end">
                  <label tabIndex="0" class="btn btn-ghost btn-circle avatar">
                    <div class="w-10 rounded-full">
                      <img src="https://api.lorem.space/image/face?hash=33791" />
                    </div>
                  </label>
                  <ul
                    tabIndex="0"
                    class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
                  >
                    <li>
                      <a class="justify-between">
                        Profile
                        <span class="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <p>Settings</p>
                    </li>
                    <li>
                      <p onClick={() => signOut(auth)}>Logout</p>
                    </li>
                  </ul>
                </div>
              </>
            )}
          </ul>
        </div>
      </div>
      {/* <Navbar collapseOnSelect expand="lg" bg="primary" variant="dark">
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
      </Navbar> */}
    </div>
  );
};

export default Header;
