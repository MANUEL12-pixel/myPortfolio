import React from "react";
import "../styles/Services.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Services() {
  return (
    <div className="Servicesfond">
      <div className="Services">
        <h1 className="titleServices">Services</h1>
        <p className="descServices">
          Services that I offer to my clients at the moment
        </p>
      </div>
      <div className="container">
        <div className="row align-items-center rowServices">
          <div className="col">
            <div className="Fullresponsive">
              <FontAwesomeIcon
                icon={["fas", "mobile-alt"]}
                className="Iconresponsive"
              />
              <br />
              <h5 className="titleResponsive">Fully Responsive</h5>
              <p className="Descresponsive">
                Your site will display properly on any device, including desktop
                computers, tablets and mobile phones.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="Creativedesign">
              <FontAwesomeIcon
                icon={["fas", "fill-drip"]}
                className="Iconfill-drip"
              />
              <br />
              <h5 className="titleCreaivedesign">Creative Design</h5>
              <p className="DescCreativedesign">
                A good and attractive web design helps you keep your leads on
                your site, which is the digital face of your business.
              </p>
            </div>
          </div>
          <div className="col">
            <div className="Development">
              <FontAwesomeIcon icon={["fas", "code"]} className="Iconcode" />
              <br />
              <h5 className="titleDevelopment">Development</h5>
              <p className="Descdevelopment">
                I know the importance of web design and can help you create a
                website you’ll love.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
