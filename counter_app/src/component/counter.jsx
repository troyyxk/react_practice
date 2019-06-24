import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    address: {
      street: ""
    }
  };

  render() {
    return (
      <div>
        <span>{this.state.count}</span>
        <h1>Hello World</h1>
        <button>Increment</button>
      </div>

      // <React.Fragment>
      // <h1>Hello World</h1>
      // <button>Increment</button>
      // </React.Fragment>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count == 0 ? "Zero" : count;
  }
}

export default Counter;
