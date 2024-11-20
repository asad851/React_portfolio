import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Logo from "../assets/images/Asadsiddiqui.svg";
import { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import linkedin from "../assets/images/nav-icon1.svg";
import insta from "../assets/images/nav-icon3.svg";
import github from "../assets/images/icons8-github.svg";
import { animateScroll as scroll } from "react-scroll";
import { useRef } from "react";
import Contact from "./Contact";
function NavBar({ scrollToElement }) {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);
  const [show, setShow] = useState("");
  const navrRef = useRef(null);
  const buttonRef = useRef(null);
  const collapseDrawer = () => {
    navrRef.current.classList.remove("show");
    // navrRef.current.classList.add('show')
  };
  const toggleButton = () => {
    // navrRef.current.classList.remove('collpase')
  };

  useEffect(() => {
    const scrollFunc = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", scrollFunc);
    return () => {
      window.removeEventListener("scroll", scrollFunc);
    };
  }, []);

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home">
          <img src={Logo} alt="LOGO" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => toggleButton()}
        >
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav" ref={navrRef}>
          <Nav className="ms-auto">
            <Nav.Link
              href="#home"
              className={
                activeLink === "Home" ? "active navbar-link" : "navbar-link"
              }
              onClick={(e) => {
                setActiveLink(`Home`);
                collapseDrawer();
                scrollToElement("#home");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              href="#skills"
              className={
                activeLink === "Skills" ? "active navbar-link" : "navbar-link"
              }
              onClick={(e) => {
                setActiveLink(`Skills`);
                collapseDrawer();
                scrollToElement("#skills");
              }}
            >
              Skills
            </Nav.Link>
            <Nav.Link
              href="#experience"
              className={
                activeLink === "experience"
                  ? "active navbar-link"
                  : "navbar-link"
              }
              onClick={(e) => {
                setActiveLink(`Skills`);
                collapseDrawer();
                scrollToElement("#experience");
              }}
            >
              Experience
            </Nav.Link>
            <Nav.Link
              href="#Projects"
              className={
                activeLink === "Projects" ? "active navbar-link" : "navbar-link"
              }
              onClick={(e) => {
                setActiveLink(`Projects`);
                collapseDrawer();
                scrollToElement("#projects");
              }}
            >
              Projects
            </Nav.Link>
            <Nav.Link
              href="#contact"
              className={
                activeLink === "Contact" ? "active navbar-link" : "navbar-link"
              }
              onClick={(e) => {
                setActiveLink(`Contact`);
                collapseDrawer();
                scrollToElement("#contact");
              }}
            >
              Contact me
            </Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a
                href="https://www.linkedin.com/in/asad-ahmed-siddiqui-7b875977?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BzHBCHLxeSFSXQgd1%2BsEs4Q%3D%3D"
                target="_blank"
              >
                <img src={linkedin} alt="" />
              </a>
              <a href="https://github.com/asad851" target="_blank">
                <img src={github} alt="" />
              </a>
              <a
                href="https://www.instagram.com/asad_saiyan/?hl=en"
                target="_blank"
              >
                <img src={insta} alt="" />
              </a>
            </div>
            <button
              className="vvd"
              onClick={() => {
                scrollToElement("#contact");
                collapseDrawer();
              }}
            >
              Let's Connect
            </button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
