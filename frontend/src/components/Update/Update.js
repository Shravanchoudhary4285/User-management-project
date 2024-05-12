import React, { useEffect, useState } from "react";
import axios from "axios";
import {  useNavigate } from "react-router-dom";
import ApiURL  from "../../Assets/Assets"
function Update() {
  const Navigate = useNavigate();

  const [userid, setuserid] = useState("");
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [mobile, setmobile] = useState("");
  const [gender, setgender] = useState("Male");
  const [state, setstate] = useState("");
  const [city, setcity] = useState("");
  const [pincode, setpincode] = useState("");

  useEffect(() => {
    setuserid(localStorage.getItem("userid"));
    setname(localStorage.getItem("username"));
    setemail(localStorage.getItem("useremail"));
    setmobile(localStorage.getItem("usermobile"));
    setgender(localStorage.getItem("usergender"));
    setstate(localStorage.getItem("userstate"));
    setcity(localStorage.getItem("usercity"));
    setpincode(localStorage.getItem("userpincode"));
  }, []);
  const HandleSubmit = async (e) => {
    e.preventDefault();
    const params = {
      name: name,
      email: email,
      mobile: mobile,
      gender: gender,
      state: state,
      city: city,
      pincode: pincode,
    };
    const response = await axios.put(
      `${ApiURL}/update/${userid}`,
      params
    );
    if (response.data.message === "Data update Successfully") {
      Navigate("/manageusers");
    } else {
      alert(response.data.message);
    }
  };
  return (
    <>
      <div className="bg-secondary rounded p-5">
        <h3 className="text-uppercase mb-4" style={{ letterSpacing: 5 }}>
          Update
        </h3>
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name *</label>
            <input
              type="text"
              className="form-control border-0"
              id="name"
              onChange={(e) => setname(e.target.value)}
              value={name}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email *</label>
            <input
              type="email"
              className="form-control border-0"
              id="email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label htmlFor="mobile">Mobile *</label>
            <input
              type="text"
              className="form-control border-0"
              id="mobile"
              value={mobile}
              onChange={(e) => setmobile(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="gender">Gender *</label>
          </div>
          <div style={{ display: "flex", justifyContent: "space-evenly" }}>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="specifyColor flexRadioDefault1"
                name="gender"
                onChange={(e) => setgender(e.target.value)}
                value={"Male"}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Male
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="specifyColor flexRadioDefault2"
                name="gender"
                onChange={(e) => setgender(e.target.value)}
                value={"Female"}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Female
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                id="specifyColor flexRadioDefault3"
                name="gender"
                onChange={(e) => setgender(e.target.value)}
                value={"Other"}
              />
              <label className="form-check-label" htmlFor="flexRadioDefault3">
                Other
              </label>
            </div>
          </div>

          <div className="form-group">
            <select
              className="custom-select border-0 px-4"
              style={{ height: 47 }}
              value={state}
              onChange={(e) => setstate(e.target.value)}
            >
              <option>Select a state</option>
              <option value="M.P">M.P </option>
              <option value="Maharastra">Maharastra </option>
              <option value="Gujarat">Gujarat</option>
            </select>
          </div>
          <div className="form-group">
            <select
              className="custom-select border-0 px-4"
              style={{ height: 47 }}
              value={city}
              onChange={(e) => setcity(e.target.value)}
            >
              <option>Select a city</option>
              <option value="Indore">Indore </option>
              <option value="Bhopal">Bhopal </option>
              <option value="Ujjain">Ujjain </option>
            </select>
          </div>
          <div className="form-group">
            <label htmlFor="pincode">Pincode *</label>
            <input
              type="text"
              className="form-control border-0"
              id="pincode"
              value={pincode}
              onChange={(e) => setpincode(e.target.value)}
            />
          </div>

          <div className="form-group mb-0">
            <input
              type="submit"
              value="SignUp"
              className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold"
            />
          </div>
        </form>
      </div>
    </>
  );
}

export default Update;
