import { Col, Container, Row } from "react-bootstrap";
import WelcomeGroup from "../components/WelcomeGroup";

export default function Home() {
  return (
    <Container className="m-auto h-100 page-container">
      <Col className="h-100 align-items-center justify-content-around">
        <Row className={"w-100"}>
          <p className="home-title">Darby Koenig</p>
          <p className="home-subtitle">UI/UX Design</p>
        </Row>
        <Row className="mb-5 pb-5 h-50">
          <WelcomeGroup />
        </Row>
      </Col>
    </Container>
  );
}
