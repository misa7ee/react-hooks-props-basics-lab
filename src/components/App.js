import React from "react";
import NavBar from "./NavBar";
import Home from "./Home";
import About from "./About";

// pass this data down as props to the child component(s) that need it!
import user from "../data/user";


function App() {
  return (
    <div>
      <NavBar  />
      <Home user={user} name={user.name} city={user.city} color={user.color}/>
      <About github={user.links.github} bio={user.bio} linkedin={user.links.linkedin}/>
    </div>
  );
}

export default App;
