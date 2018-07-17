import React, { Component } from "react";
import "./AllJobs.css";
import axios from "axios";
// import "./JobBoard.js";

class AllJobs extends Component {
 state = {
   allJobs: [],
  //  username: "",
  //  streetAddress: "",
  //  city: "",
  //  state: "",
  //  zipCode: "",
  //  price: "",
  //  dateNeededBy: "",
  //  jobChosen: false
 };

 componentDidMount() {
   this.loadJobs()
}
 

loadJobs = event => {
   console.log("Get is fired");


   axios
     .get("/api/jobs/")
     .then(response=> {
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
          //  username: data.username,
          //  streetAddress: data.streetAddress,
          //  city: data.city,
          //  state: data.state,
          //  zipCode: data.zipCode,
          //  price: data.price,
          //  dateNeededBy: data.dateNeededBy
         });
   
console.log(this.state.allJobs)
console.log(this.state.allJobs[0].city)
// console.log(this.state.streetAddress)
// console.log(this.state.username)
      
       // response["data"][0].username)
     
     })
     .catch(function(error) {
       console.log(error);
     })

};
render() {
  return (
    
    <div className="center">
      <div className="jumbotron-create">
      </div>
      {/* <p>Hello {this.state.firstName} {this.state.lastName}</p> */}
      <div className="transbox-create-bg">
        <div className="transbox-create">
        {this.state.allJobs.map(job => (
                   <div>
                    {job.city}
                      
                     
                   </div>
                  ))}
        </div>
      </div>
    </div>
  );
}


};

export default AllJobs;