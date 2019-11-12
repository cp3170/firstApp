import React, { Component } from "react";
import email1 from "../data";
class Email extends Component {
  state = {};
  render() {
    console.log("hello from emailxxxxxx");
    return (
      <div
        style={{
          marginLeft: this.drawerWidth,
          margin: 100,
          backgroundColor: "red"
        }}
      >
        Hello {this.props.match.params.id}
        {/* {email1} */}
      </div>
    );
  }
}

export default Email;
