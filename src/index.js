import React from "react";

const div = React.createElement(
  "div",
  { key: "hello-world", type: "text" },
  "Hello World!"
);

console.log(div);
