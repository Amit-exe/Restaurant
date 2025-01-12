import React, { useEffect } from "react";
import logo from "../images/logo.png";

function Navbar() {
  // const navlinks = document.querySelector(".navbar-nav");
  // navlinks.addEventListener("click", function (e) {
  //   e.preventDefault();
  //   const secid = e.target.getAttribute("href");

  //   const sec = document.querySelector(secid);
  //   sec.scrollIntoView({ behavior: "smooth" });
  //   console.log(sec);
  // });

  useEffect(() => {
    const navlinks = document.querySelector(".navbar-nav");

    if (navlinks) {
      navlinks.addEventListener("click", function (e) {
        if (e.target.tagName === "A") {
          e.preventDefault();
          const secid = e.target.getAttribute("href");

          if (secid) {
            const sec = document.querySelector(secid);
            if (sec) {
              sec.scrollIntoView({ behavior: "smooth" });
              console.log(sec);
            }
          }
        }
      });
    }

    // Cleanup the event listener on component unmount
    return () => {
      if (navlinks) {
        navlinks.removeEventListener("click", () => {});
      }
    };
  }, []);

  return (
    <nav class="navbar navbar-expand-lg navbar-dark">
      <a class="navbar-brand" href="">
        <img className="logo" src={logo}></img>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#home">
              Home
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#menu">
              Menu
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#drinks">
              Drinks
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#events">
              Events
            </a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#about">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
