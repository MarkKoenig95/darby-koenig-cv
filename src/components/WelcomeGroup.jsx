import { Container, Row } from "react-bootstrap";
import welcomeImg from "../images/welcome-button.svg";
import aboutImg from "../images/about-button.svg";
import portfolioImg from "../images/portfolio-button.svg";
import { useEffect, useState } from "react";
import WackyButton from "./WackyButton";

export default function WelcomeGroup() {
  const [shouldBounce, setShouldBounce] = useState(false);
  const [scale, setScale] = useState(
    window.innerWidth > 500 ? 1 : window.innerWidth / 500
  );
  return (
    <Container
      className="m-auto"
      style={{
        width: 500,
        transform: `scale(${scale})`,
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
        style={{
          transform: `scale(${scale})`,
        }}
      />
      <Row className="justify-content-around">
        <WackyButton
          className="about-button"
          image={aboutImg}
          onClick={() => {
            window.location.href = "/#/about";
          }}
          text="About Me"
          left={90}
          top={-115}
          shouldBounce={shouldBounce}
          style={{
            transform: `scale(${scale})`,
          }}
        />
        <WackyButton
          className="portfolio-button"
          image={portfolioImg}
          onClick={() => {
            window.location.href = "/#/portfolio";
          }}
          text="Portfolio"
          left={-70}
          top={-100}
          shouldBounce={shouldBounce}
          style={{
            transform: `scale(${scale})`,
          }}
        />
      </Row>
    </Container>
  );
}
