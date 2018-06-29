import React, { Component } from "react";
import "./Form.css";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    userName: "",
    password: "",
    passwordConf: ""
  }

  handleRegisterInputChange = event => {
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormRegisterSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    alert(`Hello ${this.state.firstName} ${this.state.lastName} the form is submitted.`);
    
    //I GUESS THIS IS WHERE THE DB STUFF WILL GO.
    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      userName: "",
      password: "",
      passwordConf: ""
    });
  };


  handleLogInInputChange = event => {
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleLLoginFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();

    alert(`Hello ${this.state.userName} your login is is submitted.`);
    
    //I GUESS THIS IS WHERE THE DB STUFF WILL GO.  
    this.setState({
      userName: "",
      password: "",
      
    });
  };

render() {
    return (

  <div>
        <p>
          Hello {this.state.firstName} {this.state.lastName}
        </p>
 
    <h3>Register Account</h3>

  <form className="ui form">

    <div className="field">
    <label>First Name</label>
    <input type="text"
    value={this.state.firstName}
    name="firstName"
    onChange={this.handleRegisterInputChange}
    />
  </div>
 
   <div className="field">
    <label>Last Name</label>
    <input type="text"
    value={this.state.lastName}
    name="lastName"
    onChange={this.handleRegisterInputChange}
    />
  </div>

  <div className="field">
    <label>Phone Number</label>
    <div className="field">
      <input type="text"
      value={this.state.phone}
      name="phone"
      placeholder="(xxx-xxx-xxx)"
      onChange={this.handleRegisterInputChange}
      />
   </div>
    </div>

  <div className="field">
  <label>E-mail</label>
    <input type="email"
    value={this.state.email}
    name="email"
    onChange={this.handleRegisterInputChange}
    />
  </div>

  <div className="field">
    <label>User Name</label>
    <input type="text"
    value={this.state.userName}
    name="userName"
    onChange={this.handleRegisterInputChange}
    />
  </div>

  <div className="field">
    <label>Password</label>
    <input type="text"
    value={this.state.password}
    name="password"
    onChange={this.handleRegisterInputChange}
    />
  </div>

  <div className="field">
    <label>Confirm Password</label>
    <input type="text"
    value={this.state.passwordConf}
    name="passwordConf"
    onChange={this.handleRegisterInputChange}
    />
  </div>

  <div className="field">
      <button className="ui button" 
      type="submit" 
      onClick={this.handleFormRegisterSubmit}>Submit</button>
  </div>

  </form>

  <h3>Sign In to Your Account</h3>

  <form className="ui form">

    <div className="field">
    <label>User Name</label>
    <input type="text"
    value={this.state.userName}
    name="userName"
    onChange={this.handleRegisterInputChange}
    />
  </div>

    <div className="field">
    <label>Password</label>
    <input type="text"
    value={this.state.password}
    name="password"
    onChange={this.handleRegisterInputChange}
    />
  </div>

    <div className="field">
    <button className="ui button" 
    type="submit" 
    onClick={this.handleLLoginFormSubmit}>Submit</button>
    </div>

  </form>
  </div>
  );
  }
};

export default Form;