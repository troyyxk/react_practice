import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    address: {
      street: ""
    },
    imageUrl: "https://picsum.photos/200",
    tags: ["tag1", "tag2", "tag3"]
  };

  styles = {
    fontSize: 1000,
    fontWeight: "bold"
  };

  // {} for dynamic

  render() {
    // let classes = this.getBadgeClasses();

    return (
      <div>
        <img src={this.state.imageUrl} alt="" />
        <span style={this.styles} className={this.getBadgeClasses()}>
          {this.formatCount()}
        </span>
        <h1>Hello World</h1>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {this.state.tags.map(tag => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>

      // <React.Fragment>
      // <h1>Hello World</h1>
      // <button>Increment</button>
      // </React.Fragment>
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
