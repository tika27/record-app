import React, { Component } from "react";

class HeaderComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div>
        <header>
<<<<<<< HEAD
          <nav className="navbar navbar-expand-md navbar-dark bg-light">
=======
          <nav className="navbar navbar-expand-md navbar-light bg-light">
>>>>>>> origin
            Employee Management System
            <ul style = {{ float: 'left', margin: 0,  padding: 0}}>
           <li style = {{ float: 'left',}}><a href="/employees">Home</a></li>
            <li style = {{ float: 'left',}} ><a href="/employees">Employees</a></li>
            <li  style = {{ float: 'left',}}><a href="/salaries">Salary</a></li>
            </ul>
          </nav>
        </header>
      </div>
    );
  }
}

export default HeaderComponent;
