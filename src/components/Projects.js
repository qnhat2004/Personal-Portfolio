import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import webPlatform from "../assets/img/web-platform.png";
import dockerImg from "../assets/img/docker-img.png";
import hoso from "../assets/img/hoso.png";
import gitImg from "../assets/img/git-img.jpg";
import subject_at_university from "../assets/img/subject-at-university.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Web Platform",
      description: "Design & Development",
      imgUrl: webPlatform,
      link: "https://github.com/WebPlatform-SunshineTeam/2024_CSE391_NentangWeb"
    },
    {
      title: "Learning Docker",
      description: "Build, test, and deploy Docker applications",
      imgUrl: dockerImg,
      link: "https://github.com/qnhat2004/Learn-Docker"
    },
    {
      title: "Winform + SQL Database",
      description: "Design & Development",
      imgUrl: hoso,
      link: "https://github.com/qnhat2004/Analysis-and-Design-of-Information-Systems"
    },
    {
      title: "Learning Git and Github",
      description: "Version control system",
      imgUrl: gitImg,
      link: "https://github.com/qnhat2004/Learn-Git-and-Github"
    },
    {
      title: "Subject at University",
      description: "AI, OOP, Data Structure and Algorithm, C#, etc.",
      imgUrl: subject_at_university,
      link: "https://github.com/qnhat2004/Subject_at_University"
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg3,
      link: ""
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              // <a href={project.link} key={index} target="_blank" rel="noreferrer">
                              //   <ProjectCard title={project.title} description={project.description} imgUrl={project.imgUrl} />
                              // </a>
                              <ProjectCard key={index} {...project} />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>Project on tab 2</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Project on tab 3</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="img"></img>
    </section>
  )
}
