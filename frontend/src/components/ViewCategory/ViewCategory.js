import React, { useEffect, useState } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Card, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import ApiURL from "../../Assets/Assets";

function ViewCategory() {
  const Navigate = useNavigate();

  const [category, setcategory] = useState([]);
  const [search, setsearch] = useState("");

  const GetCategory = async () => {
    const token = localStorage.getItem("token");
    const response = await axios.get(`${ApiURL}/viewcategory`, {
      headers: {
        Authorization: `bearer ${token}`,
      },
    });
    if (response.data.status === 401) {
      alert(response.data.message);
      localStorage.clear();
      Navigate("/");
    } else {
      setcategory(response.data.categorydata);
    }
  };
  useEffect(() => {
    GetCategory();
  }, []);

  const HandleDelete = async (id) => {
    const response = await axios.delete(
      `${ApiURL}/deletecategory/${id}`
    );
    console.log(response);
    GetCategory();
  };

  return (
    <>
      <Header></Header>
      <div style={{ display: "flex", justifyContent: "space-evenly" }}>
        <h3 className="text-uppercase mb-4" style={{ letterSpacing: 1 }}>
          View Catgeory
        </h3>
        <div className="mb-5">
          <form>
            <div className="input-group">
              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Search Items"
                onChange={(e) => setsearch(e.target.value)}
              />
            </div>
          </form>
        </div>
      </div>

      <div style={{ display: "flex", gap: "15px", flexWrap: "wrap" }}>
        {category.length > 0 ? (
          category
            .filter((val) =>
              val.catname.toLowerCase().includes(search.toLowerCase())
            )
            .map((value, index) => (
              <Card style={{ width: "18rem" }} key={index}>
                <Card.Img
                  variant="top"
                  src={`${ApiURL}/Category/${value.caticon}`}
                  width={160}
                  height={200}
                />
                <Card.Body>
                  <Card.Title>{value.catname}</Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                  <Button
                    variant="danger"
                    onClick={() => HandleDelete(value._id)}
                  >
                    Delete
                  </Button>
                </Card.Body>
              </Card>
            ))
        ) : (
          <h1 style={{ textAlign: "center" }}>No Record Found</h1>
        )}
      </div>
      <Footer></Footer>
    </>
  );
}

export default ViewCategory;
