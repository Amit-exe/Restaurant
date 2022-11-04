import React from "react";
import logo from "../images/logo.png"

function Navbar() {
    return <nav class="navbar navbar-expand-lg navbar-dark">
        <a class="navbar-brand" href="">
          <img className="logo" src={logo}></img>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>


        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#menu">Menu</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#drinks">Drinks</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#events">Events</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#about">About</a>
            </li>
          </ul>
        </div>
      </nav>;
}

export default Navbar;
