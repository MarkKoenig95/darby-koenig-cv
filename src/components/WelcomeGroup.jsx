import { Button, Container, Image, Row } from "react-bootstrap";
import welcomeImg from "../images/welcome-button.svg";
import aboutImg from "../images/about-button.svg";
import portfolioImg from "../images/portfolio-button.svg";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function bounce(startX, startY, targetX, targetY, setXState, setYState) {
  let xDifference = targetX - startX;
  let yDiffference = targetY - startY;
  let xOverflowDist = xDifference / 2;
  let yOverflowDist = yDiffference / 2;
  let time = 0;
  let momentum = 22;

  let xInc = xDifference / 10;
  let yInc = yDiffference / 10;

  for (let i = 1; i < 11; i++) {
    setTimeout(() => {
      setXState((prev) => prev + xInc);
      setYState((prev) => prev + yInc);
    }, time);
    time += 5;
  }

  for (momentum; momentum > 4; momentum = momentum / 2) {
    let xInc = xOverflowDist / momentum;
    let yInc = yOverflowDist / momentum;
    for (let i = momentum; i > 0; i--) {
      setTimeout(() => {
        setXState((prev) => prev + xInc);
        setYState((prev) => prev + yInc);
      }, time);
      time += 26 - momentum;
    }

    for (let i = momentum; i > 0; i--) {
      setTimeout(() => {
        setXState((prev) => prev - xInc);
        setYState((prev) => prev - yInc);
      }, time);
      time += 26 - momentum;
    }

    xOverflowDist = xOverflowDist / 3;
    yOverflowDist = yOverflowDist / 3;
  }

  setTimeout(() => {
    setXState(targetX);
    setYState(targetY);
  }, time);
}

function WackyButton(props) {
  const { className, image, text, left, onClick, path, top, shouldBounce } =
    props;

  const [leftState, setLeftState] = useState(left);
  const [topState, setTopState] = useState(top);

  useEffect(() => {
    if (shouldBounce) {
      bounce(leftState, topState, 0, 0, setLeftState, setTopState);
    } else {
      bounce(leftState, topState, left, top, setLeftState, setTopState);
    }
  }, [shouldBounce]);

  return (
    <Link
      className={"wacky-button " + className}
      style={{
        backgroundImage: `url(${image})`,
        left: leftState,
        top: topState,
        textDecoration: "none",
      }}
      onClick={onClick}
      to={path}
    >
      <p className={className + "-text wacky-button-text no-select"}>{text}</p>
    </Link>
  );
}

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
