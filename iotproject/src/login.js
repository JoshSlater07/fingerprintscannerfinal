import React, { Component } from "react";
 
class Login extends Component {
  render() {
    return (
      <div class= "login">
        <h2>Login</h2>
        <p>Please scan your fingerprint now and wait for authorisation...</p>
        <div>
	   <img src="https://i.pinimg.com/originals/95/d1/0f/95d10f502e973b4a79dae1e1882f623e.png" class ="thumb" alt="Logo">
		</img>
		  </div>
      </div>
    );
  }
}
 
export default Login;