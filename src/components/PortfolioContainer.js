import React from "react";
import { BrowserRouter as Router, Route,} from "react-router-dom";

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
        </div>
        <Footer />
      </div>
    </Router>
  );
}

// export default function PortfolioContainer() {
//   const [currentPage, setCurrentPage] = useState("Home");

//   // This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
//   const renderPage = () => {
//     if (currentPage === "Home") {
//       return <Home />;
//     }
//     if (currentPage === "About") {
//       return <About />;
//     }
//     if (currentPage === "Projects") {
//       return <Projects />;
//     }
//     if (currentPage === "Resume") {
//       return <Resume />;
//     }
//     return <Contact />;
//   };

//   const handlePageChange = (page) => setCurrentPage(page);

//   return (
//     <div>
//       {/* We are passing the currentPage from state and the function to update it */}
//       <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
//       {/* Here we are calling the renderPage method which will return a component  */}
//       {renderPage()}
//       <Footer />
//     </div>
//   );
// }
