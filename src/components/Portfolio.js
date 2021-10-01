import React from "react";
import "../styles/Portfolio.css";

import Creative from "../assets/Portfolio/creative.jpg";
import mainCode from "../assets/Portfolio/mainCode.jpg";
import webSite from "../assets/Portfolio/webSite.jpg";

function Portfolio() {
  return (
    <div className="Portfoliofond">
      <div className="Portfolio">
        <h1 className="titlePortfolio">Portfolio</h1>
        <p className="descPortfolio">
          Here you can see the projects I have worked on.
        </p>
      </div>
      <div className="container">
        <div className="wrapper wrapperPort">
          <div className="row align-items-center rowPortfolio">
            <div className="col">
              <div class="card">
                <img src={Creative} class="card-img-top" alt="..." />
                <div class="card-body">
                  <h5 class="card-title">Project #1</h5>
                  <p class="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec at quam non neque facilisis iaculis. Nulla sagittis
                    odio ac sapien luctus molestie a sit amet libero.
                  </p>
                  <a href="#">
                    <button type="button" class="btn btn-outline-dark">
                      View project
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={mainCode} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Project #2</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec at quam non neque facilisis iaculis. Nulla sagittis
                    odio ac sapien luctus molestie a sit amet libero.
                  </p>
                  <a href="#">
                    <button type="button" className="btn btn-outline-dark">
                      View project
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card">
                <img src={webSite} className="card-img-top" alt="..." />
                <div className="card-body">
                  <h5 className="card-title">Project #3</h5>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Donec at quam non neque facilisis iaculis. Nulla sagittis
                    odio ac sapien luctus molestie a sit amet libero.
                  </p>
                  <a href="#">
                    <button type="button" className="btn btn-outline-dark">
                      View project
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
