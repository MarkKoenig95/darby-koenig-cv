import "./App.css";

import { HashRouter, Switch, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import CaseStudy from "./pages/CaseStudy";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import portfolioInfo from "./logic/portfolioInfo";

function Pages() {
  const location = useLocation();

  function getRoutesFromEntries(entry) {
    let path = entry[0];
    let info = entry[1];
    let { caseStudyImage } = info;

    return (
      <Route path={"/" + path} key={"route-" + path}>
        <CaseStudy currentPath={location.pathname} />
      </Route>
    );
  }

  return (
    <div className="App">
      <Header currentPath={location.pathname} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/portfolio">
          <Portfolio />
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        {Object.entries(portfolioInfo).map(getRoutesFromEntries)}
      </Switch>
    </div>
  );
}

function App() {
  return (
    <HashRouter basename="/">
      <Pages />
    </HashRouter>
  );
}

export default App;
