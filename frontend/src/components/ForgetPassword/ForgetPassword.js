import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import ApiURL from "../../Assets/Assets";
function ForgetPassword() {
  const Navigate = useNavigate();

  const [email, setemail] = useState("");
  console.log(email);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${ApiURL}/forgetpassword`, {
      email: email,
    });
    if(response.data.status===true){
      Navigate("/resetpassword")
    }
    alert(response.data.message)
    console.log(response.data);
  };
  return (
    <>
      <Header></Header>
      <div className="bg-secondary rounded p-5">
        <h3 className="text-uppercase mb-4" style={{ letterSpacing: 3 }}>
          Forget Password
        </h3>
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              className="form-control border-0"
              id="email"
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="form-group mb-0">
            <input
              type="submit"
              value="Send Otp"
              className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold"
            />
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ForgetPassword;
