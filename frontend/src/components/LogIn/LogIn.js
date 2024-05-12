import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import ApiURl from "../../Assets/Assets"
function LogIn() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const Navigate = useNavigate();
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      email: email,
      password: password,
    };
    const response = await axios.post(`${ApiURl}/signin`, params);
    if (response.data.message === "LogIn Successfully") {
      const { name, email, mobile, gender, role, _id } = response.data.userdata;
      localStorage.setItem("userid", _id);
      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("gender", gender);
      localStorage.setItem("mobile", mobile);
      localStorage.setItem("role", role);
      localStorage.setItem("token", response.data.token);

      role === "user" ? Navigate("/user") : Navigate("/admin");
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
          LogIn
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
          <div className="form-group">
            <label htmlFor="password">Password *</label>
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
              value="LogIn"
              className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold"
            />
            <Link to="/forgetpassword">
              <Button variant="primary" style={{ float: "right" }}>
                Forget Password
              </Button>
            </Link>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </>
  );
}

export default LogIn;
