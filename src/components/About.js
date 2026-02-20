// src/components/About.js
import { image } from "../data/user";

function About() {
  return (
    <div id="about">
      <h1>About Me</h1>
      <img src={image} alt="profile" />
    </div>
  );
}

export default About;


