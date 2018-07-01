import React from "react";
import "./AllJobs.css";

const AllJobs = () => (
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
);

export default AllJobs;

