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
  let leftInc = leftDif / 30;
  let topInc = topDif / 30;
  let time = 0;
  let momentum = 22;

  for (let i = 1; i < 31; i++) {
    setTimeout(() => {
      setLeftState(currentLeft + leftInc * i);
      setTopState(currentTop + topInc * i);
    }, time);
    time += 5;
  }

  leftInc = leftDif / 80;
  topInc = topDif / 80;

  for (let i = momentum; i > 5; i = i / 3) {
    momentum = i;
    for (let i = momentum; i > 0; i--) {
      setTimeout(() => {
        setLeftState(targetLeft + leftInc * i);
        setTopState(targetTop + topInc * i);
      }, time);
      time += 26 - momentum;
    }

    for (let i = momentum; i > 0; i--) {
      setTimeout(() => {
        setLeftState(targetLeft - leftInc * i);
        setTopState(targetTop - topInc * i);
      }, time);
      time += 26 - momentum;
    }
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
