import React from "react";

import linkInicon from "../Assets/img/linkedIn-icon.png";
import gitHubicon from "../Assets/img/logo-github.png";
import "../Assets/css/Footer.css";

export default function Footer() {
  return (
    <footer class="page-footer font-small unique-color-dark">
      <div className="container ">
        {/* <!-- Grid row--> */}
        <div className="row py-4 d-flex align-items-center">
          {/* <!-- Grid column --> */}
          <div className="col-md-6 col-lg-5 text-center text-left mb-4 mb-md-0">
            <h6 className="mb-0">
              Designed and Developed by Nadia Dorado
              <br /> © 2021 Copyright
            </h6>
          </div>

          <div className="col-md-6 col-lg-7 text-center text-lg-right">
            {/* <a className="fb-ic">
              <i className="fab fa-facebook-f white-text mr-4"> </i>
            </a> */}

            {/* <!--Linkedin --> */}
            <a
              className="li-ic"
              href="https://www.linkedin.com/in/nadia-dorado/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkInicon} alt="linkIn" width="45" height="45" />
              <i className="white-text mr-4"> </i>
            </a>
            {/* <!--GitHub--> */}
            <a
              className="ins-ic"
              href="https://github.com/ndorado3"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={gitHubicon} alt="gitHub" width="35" height="35" />
              <i className=" white-text"> </i>
            </a>
          </div>
          {/* <!-- Grid column --> */}
        </div>
        {/* <!-- Grid row--> */}
      </div>
    </footer>
  );
}
