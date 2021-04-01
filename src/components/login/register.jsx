import React from "react";
import loginImg from "../../login.svg";

export class Register extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src="https://images.unsplash.com/photo-1614330258898-86823c7e3de2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjB3b3JrfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60" />
          </div>
          <form method="POST" action="/post-feedback">
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="username" placeholder="username" />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="email" placeholder="email" />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="text" name="password" placeholder="password" />
            </div>
          </div>
          <input type="submit" value="Submit"></input>
          </form>
        </div>
        <div className="footer">
          <button type="button" className="btn">
            <a href="Register">Register</a>
          </button>
        </div>
        
        <a href="/view-feedbacks">View feedbacks</a>
      </div>
      
    );
  }
}
