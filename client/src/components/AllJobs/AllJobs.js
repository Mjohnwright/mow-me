import React, { Component } from "react";
import "./AllJobs.css";
import axios from "axios";
// import "./JobBoard.js";

class AllJobs extends Component {
  state = {
    allJobs: []
  };

  componentDidMount() {
    this.loadJobs()
  }


  handleJobDelete = id => {
    axios
.delete("/api/jobs/", {id:id}).then(res => this.loadJobs());
  };
 





  loadJobs = event => {
    console.log("Get is fired");


    axios
      .get("/api/jobs/")
      .then(response => {
        console.log("FIRED");

        //console.log("this is the string" + JSON.stringify(response))
        //console.log(JSON.stringify(response["data"]))

        let data = response.data;
        //console.log(data)//BINGO!!!!!!!!!!!!!!
        //  let data = JSON.stringify(response["data"])
        //  console.log(data)
        //  console.log("data.username = " + data.username)
        //  console.log("data.username = " + data.streetAddress)
        //  console.log("data.username = " + data.city)
        //  console.log("data.username = " + data.state)
        //  console.log("data.username = " + data.zipCode)
        //  console.log("data.username = " + data.price)
        //  console.log("data.username = " + data.dateNeededBy)
        // for (let i= 0; i< data.length; i++){
        //   //jobs+= i
        //   //console.log(i)
        // }
        this.setState({
          allJobs: data
        });

        console.log(this.state.allJobs)
        console.log(this.state.allJobs[0].city)
        // console.log(this.state.streetAddress)
        // console.log(this.state.username)

        // response["data"][0].username)

      })
      .catch(function (error) {
        console.log(error);
      })

  };
  render() {
    return (

      <div className="center">
        <div className="jumbotron-alljobs">
        </div>
        <div className="transbox-alljobs-bg">
          <div className="transbox-alljobs">
            <table className="table table-bordered">
            <h4><strong>Current Jobs Available</strong></h4>
              <tbody>
                <tr>

                  <th className="thead">Customer Name</th>
                  <th className="thead">Job Address</th>
                  <th className="thead">City</th>
                  <th className="thead">State</th>
                  <th className="thead">Zip</th>
                  <th className="thead">Price</th>
                  <th className="thead">Date Needed by</th>
                  <th className="thead">CLAIM</th>

                </tr>
                {this.state.allJobs.map(job => (

                   <tr>

                    <td className="tdata">{job.username}</td>
                    <td className="tdata">{job.streetAddress}</td>
                    <td className="tdata">{job.city}</td>
                    <td className="tdata">{job.state}</td>
                    <td className="tdata">{job.zipCode}</td>
                    <td className="tdata">{job.price}</td>
                    <td className="tdata">{job.dateNeededBy}</td>
                    {/* <button onClick={() => handleJobDelete(job.id)} className="btn btn-primary">CLAIM</button> */}
                    <td className="btn btn-primary"><strong>CLAIM</strong></td>

                  </tr>


                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }


};

export default AllJobs;