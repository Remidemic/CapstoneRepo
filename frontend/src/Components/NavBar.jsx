
import React, { Component } from "react";
import {
  Navbar,
  Margin,
  Nav,
  NavDropdown,
  Container,
  Form,
  FormControl,
  Button,
} from "react-bootstrap";
import LoginForm from "./LoginForm";
import SignUpForm from "./SignUpForm";
import { Link } from "react-router-dom";
import * as userService from "./../utilities/users-service";
import { useNavigate } from "react-router-dom";
import Search from "./Search";
function NavBar({ user, setUser, cart, setGender, setSearchProducts }) {
  // Create a function responsible for login the user out
  const handleLogOut = async (e) => {
    // Call the logout function
    userService.logOut();
    // Set the user back to null
    setUser(null);
  };
  return (
    <nav>
      <Navbar bg="success" variant={"primary"}>
        <Container className="wideBar">
          <Navbar.Brand as={Link} to="/api/products">
            NFT LAND!
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                as={Link}
                to="/api/products/hot"
                name="hot"
                className="wideBar"
                onClick={(e) => {
                  console.log("TARGET NAME IS");
                  console.log(e.target.name);
                  return setGender(e.target.name);
                }}
              >
                HOT
              </Nav.Link>
              <br />
              <Nav.Link
                as={Link}
                to="/api/products/new"
                name="new"
                onClick={(e) => {
                  console.log(e.target.name);
                  return setGender(e.target.name);
                }}
              >
                NEW
              </Nav.Link>
              <br />
              <Nav.Link
                as={Link}
                to="/api/products/trending"
                name="trending"
                onClick={(e) => {
                  console.log(e.target.name);
                  return setGender(e.target.name);
                }}
              >
                TRENDING
              </Nav.Link>
              <br />

              {/* search bar */}
              <Search setSearchProducts={setSearchProducts} />
              {/* search bar */}
              <div>
                <p>
                  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </p>
                {/* <p> -------------------------------------------------- </p> */}
              </div>
              {/* SIGN UP LOG IN CART */}
              <div>
                <Container className="d-flex justify-content-end ms-1">
                  {user ? (
                    <>
                      <Navbar.Text>
                        Welcome {user.newUser?.name || user.currentUser?.name}
                      </Navbar.Text>
                      <Nav.Link
                        to=""
                        onClick={() => {
                          return handleLogOut();
                        }}
                      >
                        Log Out
                      </Nav.Link>
                    </>
                  ) : (
                    <Nav.Link as={Link} to="/login" className="mx-auto">
                      SignUp/Login
                    </Nav.Link>
                  )}
                  <Nav.Link as={Link} to="/cart">
                    <img
                      src="https://cryptopunks.app/cryptopunks/cryptopunk9476.png
                      "
                      width="25px"
                      height="25px"
                    />
                  </Nav.Link>
                  <Navbar.Text>{cart.length}</Navbar.Text>
                </Container>
              </div>
              {/* SIGN UP LOG IN CART */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </nav>
  );
}
export default NavBar;
