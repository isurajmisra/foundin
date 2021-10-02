// import React, { useState } from "react";
import React from "react";
import Button from '../elements/Button';

import Input from '../elements/Input';




export default function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function validateForm() {
//     return email.length > 0 && password.length > 0;
//   }

//   function handleSubmit(event) {
//     event.preventDefault();
//   }

  return (
  <div className="login-section">
      
        <div className="Login">
           <h3 className='title section-title'>Welcome Back, Please Login</h3>
            <form>
                <fieldset>
                    <div className="mb-16">
                    <Input
                        type="email"
                        placeholder="Email"
                    
                        label="Email"
                        required />
                    </div>
                    <div className="mb-16">
                    <Input
                        type="password"
                        placeholder="Enter your password here.."
                        label="Password"
                        required />
                    </div>
                  
                    
                    <div className="mt-24">
                    <div className="button-group">
                        <Button wide color="primary">Login</Button>
                        <Button wide tag='a' href="#">Forgot Password?</Button>
                    </div>
                    </div>
                </fieldset>
                </form>
                       
            </div>
</div>
  );
}