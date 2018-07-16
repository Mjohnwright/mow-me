import React, { Component } from "react";
import "./AllJobs.css";
import axios from "axios";

class AllJobs extends Component {
  state = {
    jobs:[],
    username: "",
    streetAddress: "",
    city: "",
    state: "",
    zipCode: "",
    price: "",
    dateNeededBy: "",
    jobChosen: false
  };

  componentDidMount() 
    this.loadJobs();
  }

 loadJobs = event => {
    console.log("Get is fired");

 
    axios
      .get("/api/jobs/")
      .then(function(response) {
        console.log("FIRED");
        console.log("this is the string" + JSON.stringify(response))
        console.log("DATA!!!!!!!!!!!!!!!!" + response.data[0]);

        let jobsArray= JSON.stringify(response.data[0])
        console.log("jobsArray = " + jobsArray);
        console.log(jobsArray.username);
         this.setState({
            username: "",
            streetAddress: "",
            city: "",
            state: "",
            zipCode: "",
            price: "",
            dateNeededBy: "",
            jobChosen: false
          });
        console.log(this.state.jobs)
        console.log(JSON.stringify(response["data"]));
         let jobsTest = JSON.stringify(response["data"]);
         console.log(jobsTest)
     

        for (let i= 0; i< JSON.stringify(response["data"].length); i++){
          //jobs+= i
          console.log(i)
        }
        // response["data"][0].username)
      
      })
      .catch(function(error) {
        console.log(error);
      })

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
  <thead id="tHead">
     <tr>
             <th scope="col">User Name</th>
      <th scope="col">Street Address</th>
      <th scope="col">City</th>
      <th scope="col">State</th>
       <th scope="col">Zip</th>
       <th scope="col">Price</th>
       <th scope="col">Cut Date</th>
       <th scope="col">Accept Job</th>
     </tr>
     </thead>
     <tbody id="tbody">
     <tr>
       <th scope="row"></th>
       <td>userName</td>
       <td>streetAddress</td>
       <td>city</td>
       <td>state</td>
       <td>zip</td>
       <td>price</td>
       <td>cutDate</td>
       <td>acceptJob</td>
     </tr>
     </tbody>
   </div>
      
      // <div className="center">
      //   <div className="jumbotron-create">
      //   </div>
      //   {/* <p>Hello {this.state.firstName} {this.state.lastName}</p> */}
      //   <div className="transbox-create-bg">
      //     <div className="transbox-create">
      //       <form className="createJob-form">
      //         <h3>Let's Create a Job</h3>

      //         <div className="field-create">
      //           <label>User Name</label>
      //           <input className="input-create"
      //             type="text"
      //             value={this.state.username}
      //             name="username"
      //             onChange={this.hanfdleInputChange}
      //           />
      //         </div>

      //         <div className="field-create">
      //           <label>Street Address</label>
      //           <input className="input-create"
      //             type="text"
      //             value={this.state.streetAddress}
      //             name="streetAddress"
      //             onChange={this.hanfdleInputChange}
      //           />
      //         </div>

      //         <div className="field-create">
      //           <label>City</label>
      //           <input className="input-create"
      //             type="text"
      //             value={this.state.city}
      //             name="city"
      //             onChange={this.hanfdleInputChange}
      //           />
      //         </div>

      //         <div className="field-create">
      //           <label>State</label>
      //           <input className="input-create"
      //             type="state"
      //             value={this.state.state}
      //             name="state"
      //             onChange={this.hanfdleInputChange}
      //           />
      //         </div>

      //         <div className="field-create">
      //           <label>Zip Code</label>
      //           <input className="input-create"
      //             type="text"
      //             value={this.state.zipCode}
      //             name="zipCode"
      //             onChange={this.hanfdleInputChange}
      //           />
      //         </div>

      //         <div className="field-create">
      //           <label>Price</label>
      //           <input className="input-create"
      //             type="text"
      //             value={this.state.price}
      //             name="price"
      //             onChange={this.hanfdleInputChange}
      //           />
      //         </div>

      //         <div className="field-create">
      //           <label>Cut Date</label>
      //           <input className="input-create"
      //             type="date"
      //             value={this.state.dateNeededBy}
      //             name="dateNeededBy"
      //             onChange={this.hanfdleInputChange}
      //           />
      //         </div>

      //         <div className="field-create">
      //           <button
      //             className="ui button-create"
      //             type="submit"
      //             onClick={this.handleAllJobsLoad}
      //           >
      //             Submit
      //           </button>
      //         </div>
      //       </form>
      //     </div>
      //   </div>
      // </div>

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
                  onChange={this.handleCreateJobInInputChange}
                />
              </div>

              <div className="field-create">
                <label>Street Address</label>
                <input className="input-create"
                  type="text"
                  value={this.state.streetAddress}
                  name="streetAddress"
                  onChange={this.handleCreateJobInInputChange}
                />
              </div>

              <div className="field-create">
                <label>City</label>
                <input className="input-create"
                  type="text"
                  value={this.state.city}
                  name="city"
                  onChange={this.handleCreateJobInInputChange}
                />
              </div>

              <div className="field-create">
                <label>State</label>
                <input className="input-create"
                  type="state"
                  value={this.state.state}
                  name="state"
                  onChange={this.handleCreateJobInInputChange}
                />
              </div>

              <div className="field-create">
                <label>Zip Code</label>
                <input className="input-create"
                  type="text"
                  value={this.state.zipCode}
                  name="zipCode"
                  onChange={this.handleCreateJobInInputChange}
                />
              </div>

              <div className="field-create">
                <label>Price</label>
                <input className="input-create"
                  type="text"
                  value={this.state.price}
                  name="price"
                  onChange={this.handleCreateJobInInputChange}
                />
              </div>

              <div className="field-create">
                <label>Cut Date</label>
                <input className="input-create"
                  type="date"
                  value={this.state.dateNeededBy}
                  name="dateNeededBy"
                  onChange={this.handleCreateJobInInputChange}
                />
              </div>

              {/* <div className="field-create">
                <button
                  className="ui button-create"
                  type="submit"
                  onClick={this.handleAllJobsLoad}
                >
                  Submit
                </button>
              </div> */}
            </form>
          </div>
        </div>
      </div>

    );
  }
  }

export default AllJobs;



// const AllJobs = () => (
//   
// 

// export default AllJobs;

