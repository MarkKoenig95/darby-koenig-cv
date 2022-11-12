import { Container, Row } from "react-bootstrap";
import WelcomeGroup from "../components/WelcomeGroup";

export default function Home() {
  return (
    <Container className="m-auto">
      <WelcomeGroup />
    </Container>
  );
}
