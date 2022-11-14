import { Container, Image } from "react-bootstrap";
import portfolioInfo from "../logic/portfolioInfo";

export default function CaseStudy(props) {
  const { currentPath } = props;

  function getLinksFromEntries(entry) {
    let path = entry[0];
    let info = entry[1];
    let { caseStudyImage } = info;

    if (currentPath !== "/" + path) return <span key={"case-study-" + path} />;
    return <Image src={caseStudyImage} fluid key={"case-study-" + path} />;
  }

  return (
    <Container className="h-100 w-100 page-container col p-5 mt-5 mb-5">
      {Object.entries(portfolioInfo).map(getLinksFromEntries)}
    </Container>
  );
}
