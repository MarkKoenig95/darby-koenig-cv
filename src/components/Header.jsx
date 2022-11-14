import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";

export default function Header(props) {
  const { currentPath } = props;

  const links = {
    "About Me": { path: "/about", font: "Lemon", fontSize: 20 },
    Portfolio: { path: "/portfolio", font: "Marko One", fontSize: 22 },
    Contact: { path: "/contact", font: "Lilita One", fontSize: 24 },
  };

  const [expanded, setExpanded] = useState(false);

  function getLinksFromEntries(entry) {
    let name = entry[0];
    let info = entry[1];
    let { path, font, fontSize } = info;
    let active = path === currentPath ? " active" : "";

    return (
      <Nav.Link
        key={name + path}
        className={"nav-link" + active}
        href={"/#" + path}
        style={{
          minWidth: "8rem",
          fontFamily: font,
          fontSize: fontSize,
        }}
        onClick={() => setExpanded(false)}
      >
        {name}
      </Nav.Link>
    );
  }

  return (
    <Navbar
      expand="md"
      expanded={expanded}
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        display: currentPath !== "/" ? "flex" : "none",
        zIndex: 1,
      }}
    >
      <Container>
        <Navbar.Brand href="/">
          <h1>Darby K.</h1>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="basic-navbar-nav"
          onClick={() => setExpanded(expanded ? false : "expanded")}
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {Object.entries(links).map(getLinksFromEntries)}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
