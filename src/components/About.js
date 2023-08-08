import React from "react";
import Links from "./Links";

function About({user}) {
  return (
    <div id="about">
      <h2>About Me</h2>

      {user.bio ? <p>{user.bio}</p> : ""}
      
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      
      <Links user={user}/>
    </div>
  );
}

export default About;
