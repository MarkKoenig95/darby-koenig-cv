import { Col, Container, Image, Row } from "react-bootstrap";
import linkedInIcon from "../images/linked-in-icon.svg";
import twitterIcon from "../images/twitter-icon.svg";
import emailIcon from "../images/email-icon.svg";
import linkedInButton from "../images/linked-in-button.svg";
import linkedInButtonIcon from "../images/linked-in-button-icon.svg";
import twitterButton from "../images/twitter-button.svg";
import twitterButtonIcon from "../images/twitter-button-icon.svg";
import emailButton from "../images/email-button.svg";

import { useState, useEffect } from "react";
import WackyButton from "../components/WackyButton";

export default function Contact() {
  const [shouldBounceLinkedIn, setShouldBounceLinkedIn] = useState(false);
  const [shouldBounceTwitter, setShouldBounceTwitter] = useState(false);
  const [shouldBounceEmail, setShouldBounceEmail] = useState(false);
  const [showBackgroundCover, setShowBackgroundCover] = useState(false);
  const [scale, setScale] = useState(
    window.innerHeight > 700 ? 1 : window.innerHeight / 900
  );

  return (
    <Container className="h-100 page-container">
      <div
        className="h-100 w-100 background-cover"
        onClick={(e) => {
          setShowBackgroundCover(false);
          setShouldBounceLinkedIn(false);
          setShouldBounceTwitter(false);
          setShouldBounceEmail(false);
          e.stopPropagation();
        }}
        style={{ display: showBackgroundCover ? "block" : "none" }}
      />
      <Row className="h-100 contact-text-container">
        <Col
          className="contact-text"
          sm={12}
          md={4}
          onClick={() => {
            setShowBackgroundCover(true);
            setShouldBounceLinkedIn(!shouldBounceLinkedIn);
          }}
          style={{ transform: `scale(${scale})` }}
        >
          <Image className="contact-icon" src={linkedInIcon} fluid />
          <p className="linked-in-text">LinkedIn</p>
        </Col>
        <Col
          className="contact-text"
          sm={12}
          md={4}
          onClick={() => {
            setShowBackgroundCover(true);
            setShouldBounceTwitter(!shouldBounceTwitter);
          }}
          style={{ transform: `scale(${scale})` }}
        >
          <Image className="contact-icon" src={twitterIcon} fluid />
          <p className="twitter-text">twitter</p>
        </Col>
        <Col
          className="contact-text"
          sm={12}
          md={4}
          onClick={() => {
            setShowBackgroundCover(true);
            setShouldBounceEmail(!shouldBounceEmail);
          }}
          style={{ transform: `scale(${scale})` }}
        >
          <Image className="contact-icon" src={emailIcon} fluid />
          <p className="email-text">email</p>
        </Col>
      </Row>
      <Row className="align-items-center justify-content-around">
        <Col sm={4} className="wacky-contact-button-container">
          <WackyButton
            className="linked-in-button"
            image={linkedInButton}
            onClick={() => {
              window.open(
                "https://linkedin.com",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            text="take me there!"
            top={-500}
            left={0}
            reverse
            shouldBounce={shouldBounceLinkedIn}
            style={{ display: shouldBounceLinkedIn ? "flex" : "none" }}
          >
            <Image src={linkedInButtonIcon} className="linked-in-button-icon" />
          </WackyButton>
        </Col>
        <Col sm={4} className="wacky-contact-button-container">
          <WackyButton
            className="twitter-button"
            image={twitterButton}
            onClick={() => {
              window.open(
                "https://twitter.com",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            text="let's go!"
            top={-500}
            left={0}
            reverse
            shouldBounce={shouldBounceTwitter}
            style={{ display: shouldBounceTwitter ? "flex" : "none" }}
          >
            <Image src={twitterButtonIcon} className="twitter-button-icon" />
          </WackyButton>
        </Col>
        <Col sm={4} className="wacky-contact-button-container">
          <WackyButton
            className="email-button"
            image={emailButton}
            onClick={() => {
              window.open(
                "mailto:darbykoenig@gmail.com",
                "_blank",
                "noopener,noreferrer"
              );
            }}
            text="Email:"
            top={-500}
            left={0}
            reverse
            shouldBounce={shouldBounceEmail}
            style={{ display: shouldBounceEmail ? "flex" : "none" }}
          >
            <p className="email-button-email">DarbyKoenig@gmail.com</p>
          </WackyButton>
        </Col>
      </Row>
    </Container>
  );
}
