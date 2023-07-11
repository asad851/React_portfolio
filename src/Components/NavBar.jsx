import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import linkedin from '../assets/linkedin.svg';
import { useEffect, useState } from 'react';

function NavBar() {
  const [activeLink,setActiveLink] = useState('Home')
  const [scrolled,setScrolled]=useState(false)
  useEffect(() => {
   const scrollFunc = () =>{
    if(window.screenY>50){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  
   }
   window.addEventListener('scroll',scrollFunc);
   return () => {
      window.removeEventListener('scroll',scrollFunc)
     
    }
  }, [])
  
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
            <Nav.Link href="#home"    className={activeLink===''?'active-navbar-link':'navbar-link'} onClick={(e)=>setActiveLink(`e.target.innerHTML`)}>Home</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink===''?'active-navbar-link':'navbar-link'} onClick={(e)=>setActiveLink(`e.target.innerHTML`)}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink===''?'active-navbar-link':'navbar-link'} onClick={(e)=>setActiveLink(`e.target.innerHTML`)}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink===''?'active-navbar-link':'navbar-link'} onClick={(e)=>setActiveLink(`e.target.innerHTML`)}>Contact me</Nav.Link>
            
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