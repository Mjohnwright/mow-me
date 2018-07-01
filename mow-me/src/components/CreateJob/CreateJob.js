import React, { Component } from "react";
import "./CreateJob.css";

const CreateJob = () => (

        <p>
          {/* Hello {this.state.firstName} {this.state.lastName} */}
        </p>
 
  <h3>Let's Create a Job</h3>

  <form className="createJob-form">

    <div className="field">
    <label>User Name</label>
    <input type="text"
    value={this.state.userName}
    name="userName"
    onChange={this.handleRegisterInputChange}
    />
  </div>
 
   <div className="field">
    <label>Street Address</label>
    <input type="text"
    value={this.state.streetAddress}
    name="streetAddress"
    onChange={this.handleRegisterInputChange}
    />
  </div>

  <div className="field">
    <label>City</label>
    <div className="field">
      <input type="text"
      value={this.state.city}
      name="city"
      placeholder="city"
      onChange={this.handleRegisterInputChange}
      />
   </div>
    </div>

  <div className="field">
  <label>State</label>
    <input type="state"
    value={this.state.state}
    name="state"
    onChange={this.handleRegisterInputChange}
    />
  </div>

  <div className="field">
    <label>Zip</label>
    <input type="text"
    value={this.state.zip}
    name="zip"
    onChange={this.handleRegisterInputChange}
    />
  </div>

  <div className="field">
    <label>Price</label>
    <input type="text"
    value={this.state.price}
    name="price"
    onChange={this.handleRegisterInputChange}
    />
  </div>

  <div className="field">
    <label>Cut Date</label>
    <input type="text"
    value={this.state.cutDate}
    name="cutDate"
    onChange={this.handleRegisterInputChange}
    />
  </div>

  <div className="field">
    <label>Accept Job</label>
    <input type="text"
    value={this.state.acceptJob}
    name="acceptJob"
    onChange={this.handleRegisterInputChange}
    />
  </div>

  <div className="field">
      <button className="ui button" 
      type="submit" 
      onSubmit={this.handleFormRegisterSubmit}>Submit</button>
  </div>

  </form>

  </div>
);

export default CreateJobs;

