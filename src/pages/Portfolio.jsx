import { Container, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import portfolioInfo from "../logic/portfolioInfo";

export default function Portfolio() {
  function getLinksFromEntries(entry) {
    let path = entry[0];
    let info = entry[1];
    let { splashImage } = info;

    return (
      <Link
        to={"/" + path}
        className="splash-button"
        key={"splash-button-" + path}
      >
        <Image src={splashImage} fluid />
      </Link>
    );
  }

  return (
    <Container className="h-100 w-100 page-container col p-5 mt-5 mb-5">
      {Object.entries(portfolioInfo).map(getLinksFromEntries)}
    </Container>
  );
}
