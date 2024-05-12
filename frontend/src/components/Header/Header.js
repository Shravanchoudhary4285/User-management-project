import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Header() {
  const [auth, setauth] = useState("");
  useEffect(() => {
    if (localStorage.getItem("role") === "user") {
      setauth(
        <>
          {/* Topbar Start */}
          <div className="container-fluid d-none d-lg-block">
            <div className="row align-items-center py-4 px-xl-5">
              <div className="col-lg-3">
                <Link to="/" className="text-decoration-none">
                  <h1 className="m-0" style={{ fontSize: 25 }}>
                    <span className="text-primary">USER</span>MANAGEMENT
                  </h1>
                </Link>
              </div>
              <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                  <i className="fa fa-2x fa-map-marker-alt text-primary mr-3" />
                  <div className="text-left">
                    <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                    <small>123 Street, New York, USA</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                  <i className="fa fa-2x fa-envelope text-primary mr-3" />
                  <div className="text-left">
                    <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                    <small>info@example.com</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                  <i className="fa fa-2x fa-phone text-primary mr-3" />
                  <div className="text-left">
                    <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                    <small>+012 345 6789</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar End */}

          {/* Navbar Start */}
          <div className="container-fluid">
            <div className="row border-top px-xl-5">
              <div className="col-lg-3 d-none d-lg-block"></div>
              <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                  <Link
                    to=""
                    className="text-decoration-none d-block d-lg-none"
                  >
                    <h1 className="m-0" style={{ fontSize: 25 }}>
                      <span className="text-primary">USER</span>MANAGEMENT
                    </h1>
                  </Link>
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarCollapse"
                  >
                    <div className="navbar-nav py-0">
                      <Link to="/user" className="nav-item nav-link active">
                        UserHome
                      </Link>
                      <Link to="/logout" className="nav-item nav-link active">
                        LogOut
                      </Link>
                    </div>
                    <Link
                      className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block"
                      to=""
                    >
                      Join Now
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* Navbar End */}
        </>
      );
    } else if (localStorage.getItem("role") === "admin") {
      setauth(
        <>
          {/* Topbar Start */}
          <div className="container-fluid d-none d-lg-block">
            <div className="row align-items-center py-4 px-xl-5">
              <div className="col-lg-3">
                <Link to="/admin" className="text-decoration-none">
                  <h1 className="m-0" style={{ fontSize: 25 }}>
                    <span className="text-primary">USER</span>MANAGEMENT
                  </h1>
                </Link>
              </div>
              <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                  <div className="text-left">
                    <h3 className="font-weight-semi-bold mb-1">
                      Welcome{" "}
                      <span
                        className="text-primary"
                        style={{ fontSize: "18px" }}
                      >
                        {localStorage.getItem("name")}
                      </span>
                    </h3>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                  <i className="fa fa-2x fa-envelope text-primary mr-3" />
                  <div className="text-left">
                    <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                    <small>{localStorage.getItem("email")}</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar End */}

          {/* Navbar Start */}
          <div className="container-fluid">
            <div className="row border-top px-xl-5">
              <div className="col-lg-3 d-none d-lg-block"></div>
              <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                  <Link
                    to=""
                    className="text-decoration-none d-block d-lg-none"
                  >
                    <h1 className="m-0" style={{ fontSize: 25 }}>
                      <span className="text-primary">USER</span>MANAGEMENT
                    </h1>
                  </Link>
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarCollapse"
                  >
                    <div className="navbar-nav py-0">
                      <Link to="/admin" className="nav-item nav-link active">
                        Admin Home
                      </Link>
                      <Link
                        to="/manageusers"
                        className="nav-item nav-link active"
                      >
                        Manage Users
                      </Link>
                      <Link
                        to="/addcategory"
                        className="nav-item nav-link active"
                      >
                        Add Category
                      </Link>
                      <Link
                        to="/viewcategory"
                        className="nav-item nav-link active"
                      >
                        View Category
                      </Link>
                      <Link
                        to="/changepassword"
                        className="nav-item nav-link active"
                      >
                        Change Password
                      </Link>

                      <Link to="/logout" className="nav-item nav-link active">
                        LogOut
                      </Link>
                    </div>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* Navbar End */}
        </>
      );
    } else {
      setauth(
        <>
          {/* Topbar Start */}
          <div className="container-fluid d-none d-lg-block">
            <div className="row align-items-center py-4 px-xl-5">
              <div className="col-lg-3">
                <Link to="/" className="text-decoration-none">
                  <h1 className="m-0" style={{ fontSize: 25 }}>
                    <span className="text-primary">USER</span>MANAGEMENT
                  </h1>
                </Link>
              </div>
              <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                  <i className="fa fa-2x fa-map-marker-alt text-primary mr-3" />
                  <div className="text-left">
                    <h6 className="font-weight-semi-bold mb-1">Our Office</h6>
                    <small>123 Street, New York, USA</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                  <i className="fa fa-2x fa-envelope text-primary mr-3" />
                  <div className="text-left">
                    <h6 className="font-weight-semi-bold mb-1">Email Us</h6>
                    <small>info@example.com</small>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 text-right">
                <div className="d-inline-flex align-items-center">
                  <i className="fa fa-2x fa-phone text-primary mr-3" />
                  <div className="text-left">
                    <h6 className="font-weight-semi-bold mb-1">Call Us</h6>
                    <small>+012 345 6789</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Topbar End */}

          {/* Navbar Start */}
          <div className="container-fluid">
            <div className="row border-top px-xl-5">
              <div className="col-lg-3 d-none d-lg-block"></div>
              <div className="col-lg-9">
                <nav className="navbar navbar-expand-lg bg-light navbar-light py-3 py-lg-0 px-0">
                  <Link
                    to=""
                    className="text-decoration-none d-block d-lg-none"
                  >
                    <h1 className="m-0" style={{ fontSize: 25 }}>
                      <span className="text-primary">USER</span>MANAGEMENT
                    </h1>
                  </Link>
                  <button
                    type="button"
                    className="navbar-toggler"
                    data-toggle="collapse"
                    data-target="#navbarCollapse"
                  >
                    <span className="navbar-toggler-icon" />
                  </button>
                  <div
                    className="collapse navbar-collapse justify-content-between"
                    id="navbarCollapse"
                  >
                    <div className="navbar-nav py-0">
                      <Link to="/" className="nav-item nav-link active">
                        Home
                      </Link>
                      <Link to="/" className="nav-item nav-link active">
                        About
                      </Link>
                      <Link to="/login" className="nav-item nav-link active">
                        Login
                      </Link>
                      <Link to="/signup" className="nav-item nav-link active">
                        Signup
                      </Link>

                      <Link to="/" className="nav-item nav-link active">
                        Contact
                      </Link>
                    </div>
                    <Link
                      className="btn btn-primary py-2 px-4 ml-auto d-none d-lg-block"
                      to=""
                    >
                      Join Now
                    </Link>
                  </div>
                </nav>
              </div>
            </div>
          </div>
          {/* Navbar End */}
        </>
      );
    }
  }, []);
  return auth;
}

export default Header;
