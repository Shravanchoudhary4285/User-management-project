import React, { useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ApiURL from "../../Assets/Assets";

function AddCategory() {
  const Navigate = useNavigate();
  const [catname, setcatname] = useState("");
  const [caticon, setcaticon] = useState("");
  console.log(catname, caticon);

  const HandleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("catname", catname);
    formData.append("caticon", caticon);

    const response = await axios.post(
      `${ApiURL}/addcategory`,
      formData
    );
    if (response.data.message === "Category Added Successfully") {
      Navigate("/viewcategory");
    } else {
      window.location.reload();
      alert(response.data.message);
    }
  };
  return (
    <>
      <Header></Header>
      <div className="bg-secondary rounded p-5">
        <h3 className="text-uppercase mb-4">ADD CATEGORY</h3>
        <form onSubmit={HandleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Add Category</label>
            <input
              type="text"
              className="form-control border-0"
              id="name"
              onChange={(e) => setcatname(e.target.value)}
            />
          </div>
          <div className="form-group">
            <input
              type="file"
              className="form-control border-0"
              id="file"
              name="caticon"
              onChange={(e) => setcaticon(e.target.files[0])}
            />
          </div>
          <div className="form-group mb-0">
            <input
              type="submit"
              value="Add Category"
              className="btn btn-primary py-md-2 px-md-4 font-weight-semi-bold"
            />
          </div>
        </form>
      </div>

      <Footer></Footer>
    </>
  );
}

export default AddCategory;
