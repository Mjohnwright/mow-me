import React, { Component } from "react";
import "./Form.css";
import axios from "axios";

class Form extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    userName: "",
    password: "",
    passwordConf: ""
  };

  handleRegisterInputChange = event => {
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  ValidateRegister = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("validate Register is fired");
    // Set of conditions to validate a New User's data
    if (this.state.firstName === "") {
      alert("Please provide your First Name");
      return false;
    } else if (this.state.lastName === "") {
      alert("Please provide your Last Name");
      return false;
    } else if (this.state.phone === "") {
      alert("Please provide your Phone Number");
      return false;
    } else if (this.state.email === "") {
      alert("Please provide your E-mail address");
      return false;
    } else if (this.state.userName === "") {
      alert("Please choose a User Name");
      return false;
    } else if (this.state.password === "") {
      alert("Please choose a password");
      return false;
    } else if (this.state.passwordConf === "") {
      alert("Please type your password again");
      return false;
    }
    this.handleFormRegisterSubmit(event);
  };

  handleFormRegisterSubmit = event => {
    console.log("POST Register is fired");

    axios
      .post("/api/user/", {
        body: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phone: this.state.phone,
          email: this.state.email,
          username: this.state.userName,
          password: this.state.password,
          passwordConf: this.state.passwordConf,
          dateJoined: new Date(Date.now())
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    this.setState({
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      userName: "",
      password: "",
      passwordConf: ""
    });

    //  res.redirect("/");
  };

  handleLogInInputChange = event => {
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="transbox-form">

        <form className="register-form">
          <h3>Register Account</h3>

          <div className="field-form">
            <label>First Name</label>
            <input className="input-form"
              type="text"
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field-form">
            <label>Last Name</label>
            <input className="input-form"
              type="text"
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field-form">
            <label>Phone Number</label>
            <div>
              <input className="input-form"
                type="text"
                value={this.state.phone}
                name="phone"
                placeholder="(xxx-xxx-xxx)"
                onChange={this.handleRegisterInputChange}
              />
            </div>
          </div>

          <div className="field-form">
            <label>E-mail</label>
            <input className="input-form"
              type="email"
              value={this.state.email}
              name="email"
              validate={this.validateEmail}
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field-form">
            <label>User Name</label>
            <input className="input-form"
              type="text"
              value={this.state.userName}
              name="userName"
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field-form">
            <label>Password</label>
            <input className="input-form"
              type="text"
              value={this.state.password}
              name="password"
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field-form">
            <label>Confirm Password</label>
            <input className="input-form"
              type="text"
              value={this.state.passwordConf}
              name="passwordConf"
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field-form">
            <button
              className="ui button-form"
              type="submit"
              onClick={this.ValidateRegister}
            >
             Register Now
            </button>
          </div>
        </form>

       </div>
    );
  }
}

export default Form;
