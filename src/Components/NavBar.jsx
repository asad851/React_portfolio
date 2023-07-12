import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from '../assets/images/Asad Siddiqui.svg';
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import linkedin from "../assets/images/nav-icon1.svg"

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
    <Navbar expand="lg" className={scrolled?"scrolled":""} >
      <Container>
        <Navbar.Brand href="#home" className='me-auto'>
          <img src={Logo} class="logo" alt="LOGO"  />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" >
          <span className='navbar-toggler-icon'></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home"    className={activeLink==='Home'?'active navbar-link':'navbar-link'} onClick={(e)=>setActiveLink(`Home`)}>Home</Nav.Link>
            <Nav.Link href="#skills"  className={activeLink==='Skills'?'active navbar-link':'navbar-link'} onClick={(e)=>setActiveLink(`Skills`)}>Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink==='Projects'?'active navbar-link':'navbar-link'} onClick={(e)=>setActiveLink(`Projects`)}>Projects</Nav.Link>
            <Nav.Link href="#contact" className={activeLink==='Contact'?'active navbar-link':'navbar-link'} onClick={(e)=>setActiveLink(`Contact`)}>Contact me</Nav.Link>
            
          </Nav>
          <span className='navbar-text'>
            <div className='social-icon'>
              <a href=""><img className='' src={linkedin}  alt="" target="_blank" /></a>
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