import js from "../assets/images/1.svg";
import html from "../assets/images/2.svg";
import css from "../assets/images/3.svg";
import react from "../assets/images/4.svg";
import nod from "../assets/images/5.svg";
import bootstrap from "../assets/images/6.svg";
import webdev from "../assets/images/7.svg";
import tailwind from "../assets/images/8.svg";
import git from "../assets/images/9.svg";
import sass from "../assets/images/sass.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/images/arrow1.svg";
import arrow2 from "../assets/images/arrow2.svg";
import colorSharp from "../assets/images/color-sharp.png"
import colorSharp2 from "../assets/images/color-sharp2.png"

 const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Professional Skillset</h2>
                       
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={webdev} alt="Image" />
                                <h5>Web Development</h5>
                            </div>
                            <div className="item">
                                <img src={html} alt="Image" />
                                <h5>HTML5</h5>
                            </div>
                            <div className="item">
                                <img src={css} alt="Image" />
                                <h5>CSS</h5>
                            </div>
                            <div className="item">
                                <img src={sass} alt="Image" />
                                <h5>Sass</h5>
                            </div>
                            <div className="item">
                                <img src={js} alt="Image" />
                                <h5>JavasScript</h5>
                            </div>
                            <div className="item">
                                <img src={react} alt="Image" />
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <img src={nod} alt="Image" />
                                <h5>nodeJs</h5>
                            </div>
                            <div className="item">
                                <img src={bootstrap} alt="Image" />
                                <h5>Bootstrapt</h5>
                            </div>
                            <div className="item">
                                <img src={tailwind} alt="Image" />
                                <h5>Tailwind</h5>
                            </div>
                            <div className="item">
                                <img src={git} alt="Image" />
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
        <img className="background-image-right" src={colorSharp2} alt="Image" />
    </section>
  )
}

export default Skills;