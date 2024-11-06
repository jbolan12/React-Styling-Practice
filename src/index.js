//Create a React app from scratch.
//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.
//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.

import React from "react";
import ReactDOM from "react-dom";

function App() {
  // Get the current hour
  const date = new Date();
  const currentHour = date.getHours();

  // Initialize greeting and style variables
  let greeting;
  const customStyle = {
    color: "",
  };

  // Determine the greeting and corresponding text color
  if (currentHour < 12) {
    greeting = "Good Morning";
    customStyle.color = "red"; // Morning = red
  } else if (currentHour < 18) {
    greeting = "Good Afternoon";
    customStyle.color = "green"; // Afternoon = green
  } else {
    greeting = "Good Evening";
    customStyle.color = "blue"; // Evening = blue
  }

  return (
    <div>
      {/* Render the greeting with the dynamic style */}
      <h1 style={customStyle}>{greeting}</h1>
    </div>
  );
}

// Render the App component into the root element
ReactDOM.render(<App />, document.getElementById("root"));

