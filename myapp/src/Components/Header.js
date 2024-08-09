import { Component } from "react";
import React from "react";
import "../Components/Header.css";

class Header extends Component {
  render() {
    return (
      <div>
        <div className="heading-container">
          <h2>{this.props.heading}</h2>
        </div>
      </div>
    );
  }
}

export default Header;
