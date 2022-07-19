import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import music from "../../Assets/Projects/music.png";
import todo from "../../Assets/Projects/todo.png";
import piggame from "../../Assets/Projects/piggame.png";
import netflix from "../../Assets/Projects/netflix.png";
import api from "../../Assets/Projects/api.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix-Clone"
              description="It is clone of original netflix website, firstly we have the home page in which we have the watch for 30 days button.
              When we clicked that button now we gone to the netflix-shows page in which we have the many movies, for storing the movie, i use TMDB api.
              Using the Fetch Data we can shows that the list of movie and landling page shows the trending movie poster."
              link="https://clone-henna.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="A web application which show who i am.
              A web application which show what my projects, skills, past experience.
              At last you can download my CV also in this web application."
              link="https://portfolio-wheat-mu.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={api}
              isBlog={false}
              title="API Using"
              description="This is the basic project that i have made using randomAPI. To fetch the data from server, in this i have not write the hard code. I have inserted in the dynamic data. In this an image will show and parallely name and email show of those person in image."
              link="https://convin-assignment-opal.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="ToDo List"
              description="ToDo List is used to keep our daily tasks. It is build with ReactJS Library of Javascript. User can add or delete the existing tasks by click the + or - symbol. The symbol of + or - is implemented with the help of Font Awesome cdn i.e. it is inserted in html file. Tasks can be mark done when they are completed."
              link="https://vigorous-meninsky-f41f7e.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={piggame}
              isBlog={false}
              title="Pig Game"
              description="It is a two player game that is build using Javascript technique. Active Player has three options i.e. Roll Dice, Hold and Reset. Active Player roll the dice and get a random number(other than 1) which will be added to the current score. If active player get 1 then players will be switched."
              link="https://ayushi-2208.github.io/Pig-Game/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music Player"
              description="It is basic Music Player website build with HTML, CSS, Javascript. In this website i was used the transition effect using CSS3 in the background. They store the basically a three trail music. The music stored in javascript code using the link of songs. The website contains the Play, Pause, Next, Previous button and also consist the volume slider."
              link="https://ayushi-2208.github.io/Music-Player/"
            />
          </Col>

         
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
