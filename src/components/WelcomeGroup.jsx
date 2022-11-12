import { Button, Container, Image, Row } from "react-bootstrap";
import welcomeImg from "../images/welcome-button.svg";
import aboutImg from "../images/about-button.svg";
import portfolioImg from "../images/portfolio-button.svg";
import { useEffect, useState } from "react";

function bounce(
  currentLeft,
  currentTop,
  targetLeft,
  targetTop,
  setLeftState,
  setTopState
) {
  let leftDif = targetLeft - currentLeft;
  let topDif = targetTop - currentTop;
  let leftInc = leftDif / 10;
  let topInc = topDif / 10;
  let time = 0;
  let momentum = 22;
  let leftOverflowDist = leftDif / 2;
  let topOverflowDist = topDif / 2;

  for (let i = 1; i < 11; i++) {
    setTimeout(() => {
      setLeftState((prev) => prev + leftInc);
      setTopState((prev) => prev + topInc);
    }, time);
    time += 5;
  }

  for (let i = momentum; i > 4; i = i / 2) {
    momentum = i;

    let leftInc = leftOverflowDist / momentum;
    let topInc = topOverflowDist / momentum;
    for (let i = momentum; i > 0; i--) {
      setTimeout(() => {
        setLeftState((prev) => prev + leftInc);
        setTopState((prev) => prev + topInc);
      }, time);
      time += 26 - momentum;
    }

    for (let i = momentum; i > 0; i--) {
      setTimeout(() => {
        setLeftState((prev) => prev - leftInc);
        setTopState((prev) => prev - topInc);
      }, time);
      time += 26 - momentum;
    }

    leftOverflowDist = leftOverflowDist / 3;
    topOverflowDist = topOverflowDist / 3;
  }

  setTimeout(() => {
    setLeftState(targetLeft);
    setTopState(targetTop);
  }, time);
}

function WackyButton(props) {
  const { className, image, text, left, onClick, top, shouldBounce } = props;

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
    <div
      className={"wacky-button " + className}
      style={{
        backgroundImage: `url(${image})`,
        left: leftState,
        top: topState,
      }}
      onClick={onClick}
    >
      <p className={className + "-text wacky-button-text no-select"}>{text}</p>
    </div>
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
          text="About Me"
          left={90}
          top={-115}
          shouldBounce={shouldBounce}
        />
        <WackyButton
          className="portfolio-button"
          image={portfolioImg}
          text="Portfolio"
          left={-70}
          top={-100}
          shouldBounce={shouldBounce}
        />
      </Row>
    </Container>
  );
}
