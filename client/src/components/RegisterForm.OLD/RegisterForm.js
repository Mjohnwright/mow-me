import React, { Component } from "react";
import "./RegisterForm.css";
import axios from "axios";

class RegisterForm extends Component {
  state = {
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    username: "",
    password: "",
    passwordConf: ""
  };

  // ValidateRegister = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  //   console.log("validate Register is fired");
  //   // Set of conditions to validate a New User's data
  //   if (this.state.firstName === "") {
  //     alert("Please provide your First Name");
  //     return false;
  //   } else if (this.state.lastName === "") {
  //     alert("Please provide your Last Name");
  //     return false;
  //   } else if (this.state.phone === "") {
  //     alert("Please provide your Phone Number");
  //     return false;
  //   } else if (this.state.email === "") {
  //     alert("Please provide your E-mail address");
  //     return false;
  //   } else if (this.state.userName === "") {
  //     alert("Please choose a User Name");
  //     return false;
  //   } else if (this.state.password === "") {
  //     alert("Please choose a password");
  //     return false;
  //   } else if (this.state.passwordConf === "") {
  //     alert("Please type your password again");
  //     return false;
  //   }
  //   this.handleFormRegisterSubmit(event);
  // };

  handleRegisterInputChange = event => {
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleFormRegisterSubmit = event => {
    event.preventDefault();

    console.log("POST Register is fired");

    axios
    .post("/api/users/", {
        body: {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          phone: this.state.phone,
          email: this.state.email,
          username: this.state.username,
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
      username: "",
      password: "",
      passwordConf: ""
    });

    //  res.redirect("/");
  };



  render() {
    return (
      <div>
        <form className="register-form">
          <h3>Register Account</h3>

          <div className="field">
            <label>First Name</label>
            <input
              type="text"
              value={this.state.firstName}
              name="firstName"
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field">
            <label>Last Name</label>
            <input
              type="text"
              value={this.state.lastName}
              name="lastName"
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field">
            <label>Phone Number</label>
            <div className="field">
              <input
                type="text"
                value={this.state.phone}
                name="phone"
                placeholder="(xxx-xxx-xxx)"
                onChange={this.handleRegisterInputChange}
              />
            </div>
          </div>

          <div className="field">
            <label>E-mail</label>
            <input
              type="text"
              value={this.state.email}
              name="email"
              validate={this.validateEmail}
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field">
            <label>User Name</label>
            <input
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field">
            <label>Password</label>
            <input
              type="text"
              value={this.state.password}
              name="password"
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field">
            <label>Confirm Password</label>
            <input
              type="text"
              value={this.state.passwordConf}
              name="passwordConf"
              onChange={this.handleRegisterInputChange}
            />
          </div>

          <div className="field">
            <button
              className="ui button"
              type="submit"
              onClick={this.handleFormRegisterSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default RegisterForm;
