import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/images/programming.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';


 const HeroBanner = () => {
 
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const toRotate = "I am a Web Developer.";
  const period = 1000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
   
    let fullText = toRotate;
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
    
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
     
      
      setDelta(300);
    } else {
      
    }
  }
  const handleDownload = () => {
    // const link = document.createElement('a');
    // link.href = '../../public/pdf/resume.pdf'
    // link.download = 'resume.pdf';
    // link.click();
    window.open('../../public/pdf/resume.pdf', '_blank');
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center ROW">
          <Col xs={12} md={10} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1>{`Hi! I'm Asad Ahmed Siddiqui.`} </h1>
                <h1 className="txt-rotate" dataPeriod="1000" data-rotate='I am a Web Developer'><span className="wrap">{text}</span></h1>
                  <p>I am a front-end developer. I am driven by a passion for crafting captivating user experiences and constantly strive to broaden my expertise in web development. With excellent problem-solving abilities, I excel both as an independent worker and a valuable contributor in team settings..</p>
                  <button onClick={() => console.log('connect')}>Let’s Connect <ArrowRightCircle size={25} /></button>
                  <button onClick={() =>handleDownload() }>Resume <ArrowRightCircle size={25} /></button>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={9} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroBanner;