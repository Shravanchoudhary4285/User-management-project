import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
function User() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [gender, setgender] = useState("");
  const [mobile, setmobile] = useState("");


  
  useEffect(() => {
    setname(localStorage.getItem("name"));
    setemail(localStorage.getItem("email"));
    setgender(localStorage.getItem("gender"));
    setmobile(localStorage.getItem("mobile"));
  }, []);

  return (
    <>
      <Header></Header>
      <h1>User Panel</h1>
      <h3>Name:{name}</h3>
      <h3>Email:{email}</h3>
      <h3>Gender:{gender}</h3>
      <h3>Mobile:{mobile}</h3>

      <Footer></Footer>
    </>
  );
}

export default User;
