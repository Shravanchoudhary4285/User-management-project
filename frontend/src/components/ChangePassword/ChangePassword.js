import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ApiURL from "../../Assets/Assets";
function ChangePassword() {
  const Navigate = useNavigate();

  const [userid, setuserid] = useState("");
  const [password, setpassword] = useState("");
  const [newpassword, setnewpassword] = useState("");
  // const [confirmpassword, setconfirmpassword] = useState("");
  console.log(password, newpassword, userid);
  useEffect(() => {
    setuserid(localStorage.getItem("userid"));
  }, []);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const response = await axios.put(
      `${ApiURL}/changepassword/${userid}`,
      {
        password: password,
        newpassword: newpassword,
      }
    );
    if (response.data.status === true) {
      localStorage.clear();
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
        <h3 className="text-uppercase mb-4" style={{ letterSpacing: 1 }}>
          Change Password
        </h3>
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <label htmlFor="password">Old Password </label>
            <input
              type="password"
              className="form-control border-0"
              id="password"
              name="password"
              onChange={(e) => setpassword(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="newpassword">New Password</label>
            <input
              type="password"
              className="form-control border-0"
              id="newpassword"
              name="newpassword"
              onChange={(e) => setnewpassword(e.target.value)}
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

export default ChangePassword;
