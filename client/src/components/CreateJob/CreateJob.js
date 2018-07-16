import React, { Component } from "react";
import "./CreateJob.css";
import axios from "axios";

class CreateJob extends Component {
  state = {
    username: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    price: "",
    dateNeededBy: "",
    jobChosen: false
  };

  handleInputChange = event => {
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  // handleCreateJobValidate = event => {
  //   // Preventing the default behavior of the form submit (which is to refresh the page)
  //   event.preventDefault();
  //   console.log("validate Register is fired");
  //   // Set of conditions to validate a New User's data
  //   if (this.state.username === "") {
  //     alert("Please provide your User Name");
  //     return false;
  //   } else if (this.state.streetAddress === "") {
  //     alert("Please provide your street address");
  //     return false;
  //   } else if (this.state.city === "") {
  //     alert("Please provide your city");
  //     return false;
  //   } else if (this.state.state === "") {
  //     alert("Please provide your state");
  //     return false;
  //   } else if (this.state.zipCode === "") {
  //     alert("Please provide your zip code");
  //     return false;
  //   } else if (this.state.price === "") {
  //     alert("Please select your price");
  //     return false;
  //   } else if (this.state.dateNeededBy === "") {
  //     alert("Please select a date");
  //     return false;
  //   }

  //   this.handleCreateJobSubmit(event);
  // };

  handleCreateJobSubmit = event => {
    event.preventDefault();

    console.log("Create job POST is fired");
    
    axios
      .post("/api/jobs/", {
        body: {
          username: this.state.username,
          streetAddress: this.state.streetAddress,
          city: this.state.city,
          state: this.state.state,
          zipCode: this.state.zipCode,
          price: this.state.price,
          dateNeededBy: this.state.dateNeededBy,
          jobChosen: this.state.jobChosen
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
      streetAddress: "",
      city: "",
      state: "",
      zipCode: "",
      price: "",
      dateNeededBy: ""
    });
  };

  render() {
    return (
      
      <div className="center">
        <div className="jumbotron-create">
        </div>
        {/* <p>Hello {this.state.firstName} {this.state.lastName}</p> */}
        <div className="transbox-create-bg">
          <div className="transbox-create">
            <form className="createJob-form">
              <h3>Let's Create a Job</h3>

              <div className="field-create">
                <label>User Name</label>
                <input className="input-create"
                  type="text"
                  value={this.state.username}
                  name="username"
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="field-create">
                <label>Street Address</label>
                <input className="input-create"
                  type="text"
                  value={this.state.streetAddress}
                  name="streetAddress"
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="field-create">
                <label>City</label>
                <input className="input-create"
                  type="text"
                  value={this.state.city}
                  name="city"
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="field-create">
                <label>State</label>
                <input className="input-create"
                  type="state"
                  value={this.state.state}
                  name="state"
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="field-create">
                <label>Zip Code</label>
                <input className="input-create"
                  type="text"
                  value={this.state.zipCode}
                  name="zipCode"
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="field-create">
                <label>Price</label>
                <input className="input-create"
                  type="text"
                  value={this.state.price}
                  name="price"
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="field-create">
                <label>Cut Date</label>
                <input className="input-create"
                  type="date"
                  value={this.state.dateNeededBy}
                  name="dateNeededBy"
                  onChange={this.handleInputChange}
                />
              </div>

              <div className="field-create">
                <button
                  className="ui button-create"
                  type="submit"
                  onClick={this.handleCreateJobSubmit}
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

export default CreateJob;
