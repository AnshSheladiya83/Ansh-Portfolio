import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings:  [
          "Software Developer",
          "MERN Stack Developer",
          "Crafting responsive web applications with React.js",
          "Building cross-platform mobile apps with React Native",
          "Proficient in Node.js, Express, and MongoDB",
          "Passionate about clean and efficient code",
          "Collaborative problem-solver",
          "Adaptable and continuously learning"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
