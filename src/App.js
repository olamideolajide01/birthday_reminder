import React from "react";
import "./index.css";
import Birthday from "./Birthday/Birthday";

const App = () => {
  return (
    <article className="container">
      <section>
        <h1 className="text-center">BIRTHDAY REMINDER</h1>
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
