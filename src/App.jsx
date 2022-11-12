import "./App.css";

import { HashRouter, Switch, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";

function Pages() {
  const location = useLocation();

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
