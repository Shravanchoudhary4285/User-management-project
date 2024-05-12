import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Table, Button } from "react-bootstrap";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import ApiURl from "../../Assets/Assets";
function ManageUsers() {
  const Navigate = useNavigate();
  const [data, setdata] = useState([]);
  const [role, setrole] = useState("");
  console.log(role);

  const GetDate = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${ApiURl}/getdata`, {
      headers: { Authorization: `bearer ${token}` },
    });
    console.log(response.data.result);
    if (response.data.status === 401) {
      alert(response.data.message);
      localStorage.clear();
      Navigate("/");
    } else {
      setdata(response.data.result);
    }
  };
  useEffect(() => {
    GetDate();
  }, []);

  const HandleDelete = async (id) => {
    const response = await axios.delete(`${ApiURl}/delete/${id}`);
    GetDate();
    console.log(response);
  };

  const HandleUpdate = (
    userid,
    name,
    email,
    mobile,
    gender,
    state,
    city,
    pincode
  ) => {
    localStorage.setItem("userid", userid);
    localStorage.setItem("username", name);
    localStorage.setItem("useremail", email);
    localStorage.setItem("usermobile", mobile);
    localStorage.setItem("usergender", gender);
    localStorage.setItem("userstate", state);
    localStorage.setItem("usercity", city);
    localStorage.setItem("userpincode", pincode);
  };

  const AdminRole = async (id) => {
    const response = await axios.put(`${ApiURl}/adminrole/${id}`);
    console.log(response);
    GetDate();
  };
  const UserRole = async (id) => {
    const response = await axios.put(`${ApiURl}/userrole/${id}`);
    console.log(response);
    GetDate();
  };

  return (
    <>
      <Header></Header>
      <h1>View & Manage Users</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Gender</th>
            <th>Mobile</th>
            <th>Address</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((value, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{value.name}</td>
                <td>{value.email}</td>
                <td>{value.gender}</td>
                <td>{value.mobile}</td>
                <td>{value.address.city}</td>
                <td>
                  {value.role === "user" ? (
                    <Button
                      variant="warning"
                      style={{ color: "white", width: "70px" }}
                      onClick={() => AdminRole(value._id)}
                    >
                      user
                    </Button>
                  ) : (
                    <Button
                      variant="success"
                      onClick={() => UserRole(value._id)}
                    >
                      admin
                    </Button>
                  )}
                </td>
                <td>
                  <Button
                    variant="danger"
                    onClick={() => HandleDelete(value._id)}
                  >
                    Delete
                  </Button>
                  <Link to="/update">
                    <Button
                      variant="primary"
                      className="mx-4"
                      onClick={HandleUpdate(
                        value._id,
                        value.name,
                        value.email,
                        value.mobile,
                        value.gender,
                        value.address.state,
                        value.address.city,
                        value.address.pincode
                      )}
                    >
                      Edit
                    </Button>
                  </Link>
                </td>
              </tr>
            ))
          ) : (
            <h1 className="text-center">No Users Found</h1>
          )}
        </tbody>
      </Table>
      <Footer></Footer>
    </>
  );
}

export default ManageUsers;
