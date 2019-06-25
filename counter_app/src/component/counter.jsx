import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    address: {
      street: ""
    }
  };
  styles = {
    fontSize: 10,
    fontWeight: "bold"
  };

  // {} for dynamic

  constructor() {
    super();
    // this.handleIncrement = this.handleIncrement.bind(this);
  }

  // handleIncrementNotWithArrow() {
  // console.log("Increment Click", this);
  // }

  handleIncrement = () => {
    console.log("Increment Click", this);
    // this.state.count++;
    this.setState({ count: this.state.count + 1 });
    console.log(this.state.count);
  };

  render() {
    return (
      <div>
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <button
          onClick={this.handleIncrement}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? <h1>Zero</h1> : count;
  }
}

export default Counter;
