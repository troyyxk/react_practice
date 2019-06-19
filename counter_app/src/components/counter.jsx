import React, { Component } from "react";
import { SSL_OP_TLS_BLOCK_PADDING_BUG } from "constants";

class Counter extends Component {
  state = {
    count: 0
    // imageUrl: "https://picsum.photos/200"
  };

  styles = {
    fontSize: 90,
    fontWeight: "bold"
  };

  render() {
    // let classes = "badge m-2";
    // classes += this.state.count === 0 ? "badge-warning" : "badge-primary";

    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";

    return (
      <div>
        <span style={this.styles} className={classes}>
          {this.formatCount()}
        </span>
        <button className="btn btn-secondary btn-sm">Increment</button>
      </div>
    );
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero" : count;
  }
}

export default Counter;
