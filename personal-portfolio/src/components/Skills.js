import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { FaJava, FaJsSquare, FaDatabase,FaReact,FaNode,FaLeaf } from 'react-icons/fa';
import { SiSpringboot, SiRedis, SiMongodb,SiGit } from 'react-icons/si';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
                        <h2>Skills</h2>
                        <p>  </p>
                        {/* <p>I am a developer with a strong foundation in both front-end and back-end technologies. My expertise spans across programming languages like Java, JavaScript, and TypeScript as well as frameworks such as Spring Boot, React, and Node.js. I have hands-on experience in building scalable web applications, designing RESTful APIs, and optimizing database performance using MySQL, MongoDB, and Redis.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p> */}
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <FaJava size={80}/>
                                <h5>Java</h5>
                            </div>
                            <div className="item">
                                <FaJsSquare size={80}/>
                                <h5>JavaScript</h5>
                            </div>
                            <div className="item">
                                <FaDatabase size={80}/>
                                <h5>MySql</h5>
                            </div>
                            <div className="item">
                                <SiSpringboot size={80}/>
                                <h5>Spring Boot</h5>
                            </div>
                            <div className="item">
                                <FaReact size={80}/>
                                <h5>React</h5>
                            </div>
                            <div className="item">
                                <FaNode size={80}/>
                                <h5>Node.Js</h5>
                            </div>
                            <div className="item">
                                <SiRedis size={80}/>
                                <h5>Redis</h5>
                            </div>
                            <div className="item">
                                <SiMongodb size={80}/>
                                <h5>MongoDB</h5>
                            </div>
                            <div className="item">
                                <SiGit size={80}/>
                                <h5>Git</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
