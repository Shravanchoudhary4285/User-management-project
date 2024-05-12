import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ApiURl from "../../Assets/Assets"
function ResetPassword() {
  const Navigate = useNavigate();

  const [otp, setotp] = useState("");
  const [password, setpassword] = useState("");
  console.log(otp, password);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.post(`${ApiURl}/resetpassword`, {
      otp: otp,
      password: password,
    });
    if (response.data.status === true) {
      Navigate("/login");
      alert(response.data.message);
    } else {
      alert(response.data.message);
      window.location.reload();
    }
  };
  return (
    <>
      <Header></Header>
      <div className="bg-secondary rounded p-5">
        <h3 className="text-uppercase mb-4" style={{ letterSpacing: 3 }}>
          Reset Password
        </h3>
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <label htmlFor="otp">Otp</label>
            <input
              type="text"
              className="form-control border-0"
              id="otp"
              onChange={(e) => setotp(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">New Password</label>
            <input
              type="password"
              className="form-control border-0"
              id="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>

          <div className="form-group mb-0">
            <input
              type="submit"
              value="Change Password"
              className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold"
            />
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

export default ResetPassword;
