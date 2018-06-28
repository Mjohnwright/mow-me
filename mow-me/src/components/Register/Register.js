import React from "react";
import "./Register.css";


const Register = () => (
<div>
<form className="ui form">

{/* Register Account */}
<h3>Register Account</h3>
  <div className="field">
    <label>First Name</label>
    <input type="text" name="first-name" placeholder="First Name" />
  </div>

  <div className="field">
    <label>Last Name</label>
    <input type="text" name="last-name" placeholder="Last Name" />
  </div>

  <div className="ui form">
  <div className="inline fields">
    <label>Phone Number</label>
    <div className="field">
      <input type="text" placeholder="(xxx)" />
    </div>
    <div className="field">
      <input type="text" placeholder="xxx" />
    </div>
    <div className="field">
      <input type="text" placeholder="xxxx" />
    </div>
  </div>
  </div>

  <div className="ui loading form">
  <div className="field">
    <label>E-mail</label>
    <input type="email" placeholder="joe@schmoe.com" />
  </div>
  </div>

  <div className="field">
    <label>User Name</label>
    <input type="text" name="last-name" placeholder="User Name" />
  </div>

    <div className="field">
    <label>Password</label>
    <input type="text" name="first-name" placeholder="Password" />
  </div>

    <div className="field">
    <label>Verify Password</label>
    <input type="text" name="first-name" placeholder="Verify Password" />
        
    </div>

  <div className="field">
  <button className="ui button" type="submit">Submit</button>
    </div>
</form>

{/* Sign In */}
<form className="ui form">
<h3>Sign In to Your Account</h3>

<div className="field">
    <label>User Name</label>
    <input type="text" name="last-name" placeholder="User Name" />
  </div>

     <div className="field">
    <label>Password</label>
    <input type="text" name="first-name" placeholder="Password" />
  </div>

    <div className="field">
  <button className="ui button" type="submit">Submit</button>
    </div>

</form>
</div>
);

export default Register;