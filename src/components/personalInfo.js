import React, { Component } from "react";

export default class PersonalInfo extends Component {
  render() {
    return (
      <div className="personal-information">
        <div className="container">
          <div className="personal-information__avatar">
            <img src="http://jaircordero.com/assets/img_avatar.jpg" alt="personal avatar" />
          </div>
          <div className="personal-information__description">
            <p className="personal-information__name">
              Luis Jair Cordero Barona
            </p>
            <p className="personal-information__work">
              Software Developer
            </p>
            <div className="personal-information__contact">
              <dl>
                <dt>Age:</dt>
                <dd>21</dd>
                <dt>Phone:</dt>
                <dd>(+506) 7161-2841</dd>
                <dt>Email:</dt>
                <dd>cordero1823.cr@gmail.com</dd>
              </dl>
            </div>
            <p className="personal-information__social">
              <a
                href="https://github.com/jair1823"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-facebook-f"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/jair-cordero-22a9901a5/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}
