// src/components/About.js
import { image } from "../data/user";

function About() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={image} alt="profile" />
    </div>
  );
}

export default About;   // ✅ default export