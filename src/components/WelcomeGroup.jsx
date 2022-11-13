import { Container, Row } from "react-bootstrap";
import welcomeImg from "../images/welcome-button.svg";
import aboutImg from "../images/about-button.svg";
import portfolioImg from "../images/portfolio-button.svg";
import { useState } from "react";
import WackyButton from "./WackyButton";

export default function WelcomeGroup() {
  const [shouldBounce, setShouldBounce] = useState(false);
  return (
    <Container
      className="m-auto"
      style={{
        width: 500,
      }}
    >
      <WackyButton
        onClick={() => {
          setShouldBounce(!shouldBounce);
        }}
        className="welcome-button"
        image={welcomeImg}
        text="Welcome"
        left={100}
        top={0}
      />
      <Row className="justify-content-around">
        <WackyButton
          className="about-button"
          image={aboutImg}
          path="/about"
          text="About Me"
          left={90}
          top={-115}
          shouldBounce={shouldBounce}
        />
        <WackyButton
          className="portfolio-button"
          image={portfolioImg}
          path="/portfolio"
          text="Portfolio"
          left={-70}
          top={-100}
          shouldBounce={shouldBounce}
        />
      </Row>
    </Container>
  );
}
