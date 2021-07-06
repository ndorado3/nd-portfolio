import React from "react";

function NavBar({ currentPage, handlePageChange }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a
              href="#home"
              onClick={() => handlePageChange("Home")}
              className={
                currentPage === "Home" ? "nav-link active" : "nav-link"
              }
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => handlePageChange("About")}
              // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
              className={
                currentPage === "About" ? "nav-link active" : "nav-link"
              }
            >
              About Me
            </a>

            <a
              href="#projects"
              onClick={() => handlePageChange("Projects")}
              className={
                currentPage === "Projects" ? "nav-link active" : "nav-link"
              }
            >
              Projects
            </a>

            <a
              href="#resume"
              onClick={() => handlePageChange("Resume")}
              className={
                currentPage === "Resume" ? "nav-link active" : "nav-link"
              }
            >
              Resume
            </a>
            <a
              href="#contact-me"
              onClick={() => handlePageChange("Contact")}
              className={
                currentPage === "Contact" ? "nav-link active" : "nav-link"
              }
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

// {
//   return (
//     <ul className="nav flex-sm-column">
//       <li className="nav-item">
//         <a
//           href="#home"
//           onClick={() => handlePageChange("Home")}
//           className={currentPage === "Home" ? "nav-link active" : "nav-link"}
//         >
//           Home
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#about"
//           onClick={() => handlePageChange("About")}
//           // Check to see if the currentPage is `About`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
//           className={currentPage === "About" ? "nav-link active" : "nav-link"}
//         >
//           About Me
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#projects"
//           onClick={() => handlePageChange("Projects")}
//           className={
//             currentPage === "Projects" ? "nav-link active" : "nav-link"
//           }
//         >
//           Projects
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#resume"
//           onClick={() => handlePageChange("Resume")}
//           className={currentPage === "Resume" ? "nav-link active" : "nav-link"}
//         >
//           Resume
//         </a>
//       </li>
//       <li className="nav-item">
//         <a
//           href="#contact-me"
//           onClick={() => handlePageChange("Contact")}
//           className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
//         >
//           Contact Me
//         </a>
//       </li>
//     </ul>
//   );
// }
