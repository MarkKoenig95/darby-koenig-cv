import { Col, Container, Image, Row } from "react-bootstrap";
import WackyButton from "../components/WackyButton";
import darbyPic from "../images/darby.png";
import letsChatImg from "../images/lets-chat-button.svg";
import chevron from "../images/chevron.svg";
import downloadResumeImg from "../images/download-resume-button.svg";

export default function About() {
  return (
    <Container className="h-100 page-container">
      <Row className="h-100 justify-content-around align-items-center">
        <Col className="darby-pic-container" sm={12} md={6}>
          <Image className="darby-pic" src={darbyPic} fluid />
        </Col>
        <Col className="about-text-container" sm={12} md={6}>
          <h1 className="about-title">About Me</h1>
          <p>
            Im Darby Koenig and I'm brand new to the field of UI design, I've
            recently finished a UI/UX course and I'm excited to apply what I've
            learned and to continue learning from others in the field!
          </p>
          <p>
            I chose UI because I love to be able to think of solutions to make
            things as simple as possible for users, and I <strong>love</strong>{" "}
            to make things aesthetically pleasing.
          </p>
          <p>
            I am interested and love this field because I love to solve problems
            in a creative and sometimes abstract way. I also have a love for art
            and visual things, so designing an app with typography, color
            pallets, iconography etc is something that I love doing.
          </p>
          <p>
            My husband likes programming apps and websites in his free time.
            Since he picked up this hobby he's always been asking me to help him
            improve the style of his apps (and he seems to like my suggestions),
            so ever since I learned that UI was a field, it's something that
            I've really wanted to get into.
          </p>
          <Row className={"w-100"}>
            <Col sm={6}>
              <a
                className="download-resume-link"
                href="./files/Darby Koenig Resume.pdf"
                download
              >
                <WackyButton
                  className="download-resume-button"
                  image={downloadResumeImg}
                  onClick={() => {}}
                  text="Download Resume"
                />
              </a>
            </Col>
            <Col sm={6}>
              <WackyButton
                className="lets-chat-button"
                image={letsChatImg}
                onClick={() => {
                  window.location.href = "/#/contact";
                }}
                text="Let's Chat"
              >
                <Image
                  className="lets-chat-button-chevron"
                  src={chevron}
                  fluid
                />
              </WackyButton>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
