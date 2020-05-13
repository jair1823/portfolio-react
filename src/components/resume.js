import React, { Component } from "react";

export default class Resume extends Component {
  render() {
    return (
      <section className="section container" id="resume">
        <h1 className="resume-title">Resume_</h1>
        <div className="resume-list">
          <h3 className="resume-list__title">Education</h3>
          <div className="resume-list__item">
            <p className="resume-list__item-title">Colegio de Santa Ana</p>
            <p className="resume-list__item-place">Santa Ana</p>
            <p className="resume-list__item-date">02/2012 - 12/2016</p>
            <p>High School Diploma</p>
          </div>
          <div className="resume-list__item">
            <p className="resume-list__item-title">English Education CONARE</p>
            <p className="resume-list__item-place">Cartago</p>
            <p className="resume-list__item-date">03/2019 - Current</p>
            <p>English C1 - Cambridge</p>
          </div>
          <div className="resume-list__item">
            <p className="resume-list__item-title">Tecnológico De Costa Rica</p>
            <p className="resume-list__item-place">San José</p>
            <p className="resume-list__item-date">02/2017 - Current</p>
            <p>Bachelor of Computer Science Engineering</p>
          </div>
        </div>
      </section>
    );
  }
}
