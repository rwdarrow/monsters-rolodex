import React from "react";

import "./search-box.styles.css";

// Functional components to do not have access to state and lifecycle methods
// like class components do. They just receive props and return HTML which makes
// them useful for components that do not need access to the class features.

// Why does SearchBox not have state? Because CardList (in App.js) also needs to know
// about the state of SearchBox. So we leave its state in App.js to make the state
// accessible to multiple components. This is called "lifting state up."
export const SearchBox = ({ placeholder, handleChange }) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    // setState is asynchronous. To perform an action along with setState, pass a
    // callback as a second param to the setState method with whatever you want to do
    onChange={handleChange}
  />
);
