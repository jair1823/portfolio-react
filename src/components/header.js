import React, { Component } from "react";

export default class Header extends Component {
  constructor() {
    super();
    //ref for css
    this.menu = React.createRef();
    this.burger = React.createRef();

    //bind
    this.handleBurgerMenu = this.handleBurgerMenu.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll(event) {
    let body = document.body;
    let d = document.documentElement;
    d = d.clientHeight ? d : body;
    let header = document.querySelector(".header");
    if (d.scrollTop === 0) {
      header.classList.remove("header--active");
    } else {
      header.classList.add("header--active");
    }
  }

  handleBurgerMenu(e) {
    this.menu.current.classList.toggle("is-active");
    this.burger.current.classList.toggle("header__burger--active");
    this.burger.current.classList.toggle("fa-bars");
    this.burger.current.classList.toggle("fa-times");
  }

  render() {
    return (
      <div className="header">
        <i
          className="header__burger fas fa-bars"
          onClick={this.handleBurgerMenu}
          ref={this.burger}
        ></i>
        <div className="">
          <div className="container">
            <nav className="header__menu" ref={this.menu}>
              <ul>
                <li>
                  <a href="#hello">Hola</a>
                </li>
                <li>
                  <a href="#resume">Resume</a>
                </li>
                <li>
                  <a href="#portfolio">Portafolio</a>
                </li>
                <li>
                  <a href="#contact">Contacto</a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    );
  }
}
