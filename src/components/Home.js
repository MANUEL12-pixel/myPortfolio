import React from "react";
import Per from "../assets/Home/perfil.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="Homefond">
      <div className="container">
        <div className="row align-items-center">
          <div className="col">
            <img className="Perleft" src={Per} />
          </div>
          <div className="col">
            <div className="Messages">
              <h1>Hi!</h1>
              <h2>I'm Manuel Mayo</h2>
              <h3>Web and Android</h3>
              <h3>developer</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
