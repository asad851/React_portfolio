import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import  ProjectCard  from "./ProjectCard";
import ecom from '../assets/images/ecom.png'
import movieapp from '../assets/images/movieapp.png'
import colorSharp2 from '../assets/images/color-sharp2.png'
import colorSharp from '../assets/images/color-sharp.png'
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const Projects = () => {

  const projects = [
    {
      title: "Tvpedia",
      description: "This is a movie app which fetches data from API and is being displayed upon the UI, this app allows you to search movies or tv series and you can look at the details, watch trailer, look at cast and also get recommendationn of similar movies or tv series of the tv series or movies and it can be added to the list.",
      imgUrl: movieapp,
      link:'https://tvpedia.netlify.app/',
    },
    {
      title: "My Wardrobe",
      description: "Design & Development",
      imgUrl: ecom,
      link:'https://e-com-repo.vercel.app/',
    },
  
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row >
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__": ""}>
                <h2>My Recent <span class="voilet-text">work</span></h2>
                <p>Here are some projects that i recently worked upon.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  {/* <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav> */}
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row className="justify-content-center">
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    {/* <Tab.Pane eventKey="section">
                      <p></p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p></p>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp}></img>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}

export default Projects;