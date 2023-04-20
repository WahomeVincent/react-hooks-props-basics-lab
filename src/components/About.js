import React from "react";



function About(props) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {props.bio && props.bio !== "" && <p>{props.bio}</p>}
      <img src="https://i.imgur.com/mV8PQxj.gif" alt="I made this" />
      <a href={props.github}>"https://github.com/liza"</a>
      <a href={props.linkedin}> "https://www.linkedin.com/in/liza/"</a>
    </div>
  );
}

export default About;
