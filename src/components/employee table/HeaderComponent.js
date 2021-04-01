import React, { Component } from "react";
import "./App.scss";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
          <nav className="navbar navbar-expand-md navbar-dark bg-dark">
            Employee Management System
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
