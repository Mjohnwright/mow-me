import React, { Component } from "react";
import "./Login.css";
import axios from "axios";

class Login extends Component {
  state = {
    username: "",
    password: ""
  };

  handleRegisterInputChange = event => {
    const { name, value } = event.target;
    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // validateLogIn = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  //   console.log("validate is fired");
  //   if (this.state.username === "") {
  //     alert("Please provide your Username");
  //     // document.myForm.Name.focus() ;
  //     return false;
  //   } else if (this.state.password === "") {
  //     alert("Please provide your Password!");
  //     // document.myForm.email.focus() ;
  //     return false;
  //   }
  //   this.handleLLoginFormSubmit();
  // };

  handleLLoginFormSubmit = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    alert(`Hello ${this.state.username} your login is is submitted.`);

    axios
      .post("/users/login", {
        body: {
          username: this.state.username,
          password: this.state.password
        }
      })
      .then(function(response) {
        console.log(response);
      })
      .catch(function(error) {
        console.log(error);
      });

    this.setState({
      username: "",
      password: ""
    });
  };

  render() {
    return (
      <div>
        <form className="login-form" name="login">
          <h3>Sign In to Your Account</h3>

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
            <button
              className="ui button"
              type="submit"
              onClick={this.handleLLoginFormSubmit}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }

}

export default Login;