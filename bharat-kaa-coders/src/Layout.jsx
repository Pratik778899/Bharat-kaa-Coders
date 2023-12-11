import React, { Component } from "react";
import Nav from "./Common/Nav/Nav";

export default class Layout extends Component {
  render() {
    return (
      <>
        <Nav />
        {this.props.children}
      </>
    );
  }
}
