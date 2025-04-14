import React, { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { AiOutlineUser } from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
} from "react-icons/ai";


function NavBar() {
  const [navColour, setNavColour] = useState(false);

  const handleScroll = () => {
    setNavColour(window.scrollY >= 20);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderDesktopNav = () => (
    <Navbar
      fixed="top"
      expand="md"
      className={`desktop-navbar ${navColour ? "sticky" : ""}`}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <h1 className="logo mb-0">
            <span className="logo-name">
              <span className="purple">My</span>{" "}
              <span className="white">Portfolio</span>
            </span>
          </h1>
        </Navbar.Brand>

        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto d-flex align-items-center">
            
            <Nav.Item>
              <Nav.Link as={Link} to="/">
                <AiOutlineHome style={{ marginBottom: "2px" }} /> Home
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/about">
                <AiOutlineUser style={{ marginBottom: "2px" }} /> About
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link as={Link} to="/resume">
                <CgFileDocument style={{ marginBottom: "2px" }} /> Resume
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

  const renderMobileNav = () => (
    <div className="mobile-navbar">
      <Navbar expand="lg" className={`mobile-navbar ${navColour ? "sticky" : ""}`}>
        <Container>
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
            <h1 className="logo mb-0">
              <span className="logo-name">
                <span className="purple">My</span>{" "}
                <span className="white">Portfolio</span>
              </span>
            </h1>
          </Navbar.Brand>
        </Container>
      </Navbar>
    </div>
  );

  return (
    <>
      {renderDesktopNav()}
      {renderMobileNav()}
    </>
  );
}

export default NavBar;
