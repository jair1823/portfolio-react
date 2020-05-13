import React, { Component } from "react";

export default class Hello extends Component {
  render() {
    return (
      <section className="section container hello" id="hello">
        <h1 className="hello__title">Hi_</h1>
        <p className="about-me">
          TEC student with initiative and ability to propose ideas that help the
          development of projects. Ready to assist others and exchange
          knowledge. Always learning new technologies.
        </p>
        <a
          href="http://jaircordero.com/assets/cv.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="cv-download"
        >
          Download CV.
        </a>
      </section>
    );
  }
}
