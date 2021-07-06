import React from "react";
import myPic from "../../Assets/img/my-pic.png";
import "../../Assets/css/Home.css";

export default function Home() {
  return (
    // <!--The designer picture shows in here-->
    <section className="container flex-container-fliud">
      <div className="row">
        {/* <!-- Designer div --> */}
        <div className="col">
          <h2 className="centerleft">designer</h2>
          <p className="centerleftp text-muted">
            I am an UX designer enthusiast
          </p>
        </div>
        {/* <!-- Name div  --> */}
        <div className="col">
          <h1 className="display-4 text-center">
            Nadia
            <small className="text-muted"> Dorado</small>
          </h1>
        </div>
        {/* <!-- coder text div --> */}
        <div className="col">
          <h2 className="coder">coder</h2>
          <p className="centerightp text-muted">
            & a full stack Web developer in progress
          </p>
        </div>
        {/* <!-- my picture --> */}
        <img
          src={myPic}
          className="img-fluid mx-auto d-block my-pic"
          alt="Nadia's photograph"
        />
      </div>
    </section>
  );
}
