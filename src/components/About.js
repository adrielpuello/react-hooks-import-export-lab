import React from "react";
import {image} from "./user";

function About() {
  return (
    <div id="about">
      <h2>About Me</h2>
      <img src={image} alt="I made this" />
      <p>I Made This</p>
      
    </div>
  );
}

export default About;