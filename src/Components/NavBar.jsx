import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import linkedin from '../assets/linkedin.svg'

function NavBar() {
  return (
    <Navbar expand="lg" >
      <Container>
        <Navbar.Brand href="#home">
          <img src="" alt="LOGO" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggle-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#skills">Skills</Nav.Link>
            <Nav.Link href="#project">Projects</Nav.Link>
            <Nav.Link href="#contact">Contact me</Nav.Link>
            
          </Nav>
          <span className='nabar-text'>
            <div className='social-icons'>
              <a href=""><img className=''  alt="" target="_blank" /></a>
              <a href=""><img src="" alt="" target="_blank" /></a>
              <a href=""><img src="" alt="" target="_blank" /></a>
            </div>
            <button className='vvd' onClick={()=>console.log('connect')}>Let's Connect</button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;