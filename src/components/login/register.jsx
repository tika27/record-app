import React from "react";
import loginImg from "https://unsplash.com/photos/7okkFhxrxNw"

export class Register extends React.Component {

constructor(props){
    super(props);
}

render(){
    return <div className="base-container">
        <div className="header">Login</div>
        <div className="content">
            <div className="image">
                <img src={loginImg}/>
            </div>
            <div className="form">
             <div className="form-group">
                 <label htmlFor="username"></label>
                 <input type="text" name="username" placeholder="userename"/>
                </div> 
             <div className="form-group">
                 <label htmlFor="email"></label>
                 <input type="email" name="email" placeholder="email"/>
                </div> 
                <div className="form-group">
                 <label htmlFor="password"></label>
                 <input type="password" name="password" placeholder="password"/>
                </div> 
            </div>
        </div>
        <div className="footer">
            <button type="button" className="btn">Register</button>
        </div>
    </div>
   
}
}