// Class components with constructor
import React from "react";

class Car extends React.Component {
  constructor() {
    super();
    this.state = { color: "Red", brand: "Ford", model: "Mustang", year: 1964 };
  }

  render() {
    return (
      <div>
        <h2>Hi, I am a {this.state.brand} Car!</h2>
        <p>
          It is a {this.state.color} {this.state.model}
          from {this.state.year}
        </p>
      </div>
    );
  }
}

export default Car;
