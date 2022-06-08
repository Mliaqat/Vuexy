import React from "react";

function Child(props) {
  const { name, age } = props;

  return (
    <div>
      <h1>Name:{name || "liarw"}</h1>
      <h1>Age:{age}</h1>
    </div>
  );
}

export default Child;
