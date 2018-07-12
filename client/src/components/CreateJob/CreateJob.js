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

  handleCreateJobInInputChange = event => {
    const { name, value } = event.target;

    // Updating the input's state
    this.setState({
      [name]: value
    });
  };

  handleCreateJobValidate = event => {
    // Preventing the default behavior of the form submit (which is to refresh the page)
    event.preventDefault();
    console.log("validate Register is fired");
    // Set of conditions to validate a New User's data
    if (this.state.username === "") {
      alert("Please provide your User Name");
      return false;
    } else if (this.state.streetAddress === "") {
      alert("Please provide your street address");
      return false;
    } else if (this.state.city === "") {
      alert("Please provide your city");
      return false;
    } else if (this.state.state === "") {
      alert("Please provide your state");
      return false;
    } else if (this.state.zipCode === "") {
      alert("Please provide your zip code");
      return false;
    } else if (this.state.price === "") {
      alert("Please select your price");
      return false;
    } else if (this.state.dateNeededBy === "") {
      alert("Please select a date");
      return false;
    }

    this.handleCreateJobSubmit(event);
  };

  handleCreateJobSubmit = event => {
    console.log("POST is fired");
    
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
      <div>
        <p>{/* Hello {this.state.firstName} {this.state.lastName} */}</p>

        <form className="createJob-form">
          <h3>Let's Create a Job</h3>

          <div className="field">
            <label>User Name</label>
            <input
              type="text"
              value={this.state.username}
              name="username"
              onChange={this.handleCreateJobInInputChange}
            />
          </div>

          <div className="field">
            <label>Street Address</label>
            <input
              type="text"
              value={this.state.streetAddress}
              name="streetAddress"
              onChange={this.handleCreateJobInInputChange}
            />
          </div>

          <div className="field">
            <label>City</label>
            <input
              type="text"
              value={this.state.city}
              name="city"
              onChange={this.handleCreateJobInInputChange}
            />
          </div>

          <div className="field">
            <label>State</label>
            <input
              type="state"
              value={this.state.state}
              name="state"
              onChange={this.handleCreateJobInInputChange}
            />
          </div>

          <div className="field">
            <label>Zip Code</label>
            <input
              type="text"
              value={this.state.zipCode}
              name="zipCode"
              onChange={this.handleCreateJobInInputChange}
            />
          </div>

          <div className="field">
            <label>Price</label>
            <input
              type="text"
              value={this.state.price}
              name="price"
              onChange={this.handleCreateJobInInputChange}
            />
          </div>

          <div className="field">
            <label>Cut Date</label>
            <input
              type="date"
              value={this.state.dateNeededBy}
              name="dateNeededBy"
              onChange={this.handleCreateJobInInputChange}
            />
          </div>

          <div className="field">
            <button
              className="ui button"
              type="submit"
              onClick={this.handleCreateJobValidate}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default CreateJob;
