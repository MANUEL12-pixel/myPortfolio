import React from "react";
import "../styles/About.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import HTML1 from "../assets/About/html1.png";
import CSS3 from "../assets/About/css3.png";
import Jscript from "../assets/About/js.png";
import Git from "../assets/About/Git.png";
import Nodejs from "../assets/About/nodejs.png";
import Angular from "../assets/About/Angular.png";
import Vue from "../assets/About/Vue.png";
import React2 from "../assets/About/React2.png";
import AStudio from "../assets/About/As.png";
import Java from "../assets/About/Java.png";

function About() {
  return (
    <div className="Aboutfond">
      <div className="container">
        <div className="row rowColumn align-items-center">
          <div className="col">
            <div className="Message1">
              <h1 className="whoIm">Who am I?</h1>
              <h2 className="Desc">
                I am Manuel Mayo, web and Android developer / software
                engineering student
              </h2>
              <p className="Iam">
                I am Manuel Mayo, I am a web and android developer with
                excellent communication skills, I love collaborating and working
                as a team, I am looking for a part-time position in web or
                mobile development, where I can apply my knowledge and skills to
                continue improving and gain experience in this beautiful
                profession.
              </p>
              <a target="_blank" href="https://github.com/MANUEL18-Dev">
                <button type="button" class="btn btn-outline-dark">
                  <FontAwesomeIcon icon={["fab", "github"]} /> More about me
                </button>
              </a>
            </div>
          </div>
          <div className="col">
            <h1 className="Skylls">My skills:</h1>
            <div className="wrapper">
              <img className="HTML1" src={HTML1} />
              <img className="CSS3" src={CSS3} />
              <img className="Jscript" src={Jscript} />
              <img className="Git" src={Git} />
              <img className="Nodejs" src={Nodejs} />
              <img className="Angular" src={Angular} />
              <img className="Vue" src={Vue} />
              <img className="React2" src={React2} />
              <img className="AStudio" src={AStudio} />
              <img className="Java" src={Java} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
