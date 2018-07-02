import React, { Component } from "react";
import "./CreateJob.css";

class CreateJob extends Component {
  state = {
    userName: "",
    streetAddress: "",
    city: "",
    state: "",
    zip: "",
    price: "",
    cutDate: "",
    acceptJob: "",
  }

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
 if( this.state.userName === "") {
    alert( "Please provide your User Name" );
    return false;
 }
  else if (this.state.streetAddress === "" )
 {
    alert( "Please provide your street address" );
    return false;
 }
 else if (this.state.city === "" )
 {
    alert( "Please provide your city" );
    return false;
 }
 else if (this.state.state === "" )
 {
    alert( "Please provide your state" );
    return false;
 }
 else if (this.state.zip === "" )
 {
    alert( "Please provide your zip code" );
    return false;
 }

 else if (this.state.price === "" )
 {
    alert( "Please select your price" );
    return false;
 }
 else if (this.state.cutDate === "" )
 {
    alert( "Please select a date" );
    return false;
 }

 this.handleCreateJobSubmit(event);

  }

handleCreateJobSubmit (event) {
   //fires the register function to pass the data to the database
   alert(`Hello ${this.state.userName} job is listed for  ${this.state.price}`);
    
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



  render() {
    return (
<div>
        <p>
          {/* Hello {this.state.firstName} {this.state.lastName} */}
        </p>
 

  <form className="createJob-form">

    <h3>Let's Create a Job</h3>


    <div className="field">
    <label>User Name</label>
    <input type="text"
    value={this.state.userName}
    name="userName"
    onChange={this.handleCreateJobInInputChange}
    />
  </div>
 
   <div className="field">
    <label>Street Address</label>
    <input type="text"
    value={this.state.streetAddress}
    name="streetAddress"
    onChange={this.handleCreateJobInInputChange}
    />
  </div>

  <div className="field">
    <label>City</label>
      <input type="text"
      value={this.state.city}
      name="city"
      onChange={this.handleCreateJobInInputChange}
      />
   </div>

  <div className="field">
  <label>State</label>
    <input type="state"
    value={this.state.state}
    name="state"
    onChange={this.handleCreateJobInInputChange}
    />
  </div>

  <div className="field">
    <label>Zip</label>
    <input type="text"
    value={this.state.zip}
    name="zip"
    onChange={this.handleCreateJobInInputChange}
    />
  </div>

  <div className="field">
    <label>Price</label>
    <input type="text"
    value={this.state.price}
    name="price"
    onChange={this.handleCreateJobInInputChange}
    />
  </div>

  <div className="field">
    <label>Cut Date</label>
    <input type="text"
    value={this.state.cutDate}
    name="cutDate"
    onChange={this.handleCreateJobInInputChange}
    />
  </div>

  <div className="field">
      <button className="ui button" 
      type="submit" 
      onClick={this.handleCreateJobValidate}>Submit</button>
  </div>

  </form>

  </div>

);
  }
}; 

export default CreateJob
  


