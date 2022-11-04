import React from "react";
import Navbar from "./navbar";
import noodles from "../images/noodles4.jpg"

function Header() {
    return <header>
        <Navbar />
        <div class="row">

        <div class="col-lg-6">
          <h1 id="asv">FoodPanda<br/> Enjoy Tasty and Delicious Food Anytime</h1>

          <fieldset id="ourstory">
            <strong>Our Story</strong><br/>
              Food as it should be. Food should taste good. It should feel good. It should do good things for you and the world around you
          </fieldset>
        </div>
        <div class="col-lg-4">
          <img class="imgdog" src={noodles} alt="noodles" />
        </div>
      </div>
    </header>;
}

export default Header;
