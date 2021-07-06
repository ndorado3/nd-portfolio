import React from "react";

import linkInicon from "../Assets/img/linkedIn-icon.png";
import gitHubicon from "../Assets/img/logo-github.png";

export default function Footer() {
  return (
    <footer className="footer mt-aouto font-small">
      <div class="conatiner text-end p-5 py-3">
        <a className="li-ic" href="https://www.linkedin.com/in/nadia-dorado/">
          <img src={linkInicon} alt="linkIn icon" />
        </a>
        <a className="li-ic" href="https://github.com/ndorado3">
          <img src={gitHubicon} alt="linkIn icon" />
        </a>
      </div>
    </footer>
  );
}
