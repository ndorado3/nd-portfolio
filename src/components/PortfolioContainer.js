import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Navbar from "./Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Resume from "./pages/Resume";
import Footer from "./Footer";

export default function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div>
          {/* Define routes to render different page components at different paths */}
          <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/resume">
            <Resume />
          </Route>
          <Route path="*">
            <Home />
          </Route>
            </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
