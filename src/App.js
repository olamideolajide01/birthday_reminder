import React from "react";
import "./index.css";
import Birthday from "./Birthday/Birthday";
// import infos from "./stays";
// import Room from "./Room";

const App = () => {
  return (
    <article className="container">
      {/* <section className="nav"> */}
      <section>
        <h1 className="text-center">BIRTHDAY REMINDER</h1>
        {/* <img src="./imgs/logo.png" alt="" />
        <input type="search" name="search" id="" /> */}
      </section>
      <section className="main">
        <Birthday />
      </section>
      <section>
        <p className="footer--title">
          Created by Olajide Olamide - devChallenge.io
        </p>
      </section>
    </article>
  );
};

export default App;
