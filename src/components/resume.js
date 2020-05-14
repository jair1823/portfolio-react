import React, { Component } from "react";
import { education, experience } from "../data/data";

export default class Resume extends Component {
  showEducation() {
    const educationList = education.map((e, i) => {
      return (
        <div className="resume-list__item" key={i}>
          <p className="resume-list__item-title">{e.institution}</p>
          <p className="resume-list__item-place">{e.place}</p>
          <p className="resume-list__item-date">{`${e.start_date} - ${e.end_date}`}</p>
          <p>{e.title}</p>
        </div>
      );
    });
    return educationList;
  }
  
  showExperiece() {
    const list = experience.map((e, i) => {
      return (
        <div className="resume-list__item" key={i}>
          <p className="resume-list__item-title">{e.position}</p>
          <p className="resume-list__item-place">{e.place}</p>
          <p className="resume-list__item-date">{`${e.start_date} - ${e.end_date}`}</p>
          <p>{e.responsability}</p>
        </div>
      );
    });
    return list;
  }

  render() {
    return (
      <section className="section container" id="resume">
        <h1 className="resume-title">Resume_</h1>
        <div className="resume-list">
          <h3 className="resume-list__title">Education</h3>
          {this.showEducation()}
        </div>
        <div className="resume-list">
          <h3 className="resume-list__title">Experience</h3>
          {this.showExperiece()}
        </div>
      </section>
    );
  }
}
