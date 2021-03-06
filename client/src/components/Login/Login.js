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
      <div className="center">
        <div className="jumbotron-login">
        
        </div>
        <div className="transbox-login-bg">
          <div className="transbox-login">
            <form className="login-form" name="login">
              <h3>Log-In to Your Account</h3>

              <div className="field-login">
                <label>User Name</label>
                <input className="input-login"
                  type="text"
                  value={this.state.username}
                  name="username"
                  onChange={this.handleRegisterInputChange}
                />
              </div>

              <div className="field-login">
                <label>Password</label>
                <input className="input-login"
                  type="text"
                  value={this.state.password}
                  name="password"
                  onChange={this.handleRegisterInputChange}
                />
              </div>

              <div className="field-login">
                <button
                  className="ui button-login"
                  type="submit"
                  onClick={this.handleLLoginFormSubmit}
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
  }

}

export default Login;