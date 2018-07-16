import React, { Component } from "react";
import "./AllJobs.css";
import axios from "axios";

class AllJobs extends Component {
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

 componentDidMount() {
   this.loadJobs()
}
 

loadJobs = event => {
   console.log("Get is fired");


   axios
     .get("/api/jobs/")
     .then(function(response) {
       console.log("FIRED");
     
       console.log("this is the string" + JSON.stringify(response))
       
       let data = response.data[0]; //BINGO!!!!!!!!!!!!!!
     
       console.log("data.username = " + data.username);
       
       
       this.setState({
           username: data.username,
           streetAddress: data.streetAddress,
           city: data.city,
           state: data.state,
           zipCode: data.zipCode,
           price: data.price,
           dateNeededBy: data.dateNeededBy,
         });
   

       for (let i= 0; i< JSON.stringify(response["data"].length); i++){
         //jobs+= i
         console.log(i)
       }
       // response["data"][0].username)
     
     })
     .catch(function(error) {
       console.log(error);
     })

};


render() {
 this.about();
var display=this.state.hobby.map(function(things,index){
   return(
       <tr><td>{things}</td></tr>
   );
});
   
return(
    <div>
     
   
    <thead id="tHead">
    <tr>

     <th scope="col">User Name</th>

     <th scope="col">UserName</th>

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
      <td> {this.state.username}</td>
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
   )
 
 }

};

export default AllJobs;