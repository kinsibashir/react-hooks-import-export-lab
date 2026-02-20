// src/components/Home.js
import { username, city } from "../data/user";

function Home() {
  return (
    <div id="home">
      <h1>Hello, my name is {username}</h1>
      <p>I am from {city}</p>
    </div>
  );
}

export default Home;


