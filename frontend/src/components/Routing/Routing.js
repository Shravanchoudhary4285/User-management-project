import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "../Index/Index";
import LogIn from "../LogIn/LogIn";
import SignUp from "../SignUp/SignUp";
import User from "../User/User";
import Admin from "../Admin/Admin";
import LogOut from "../LogOut/LogOut";
import ManageUsers from "../ManageUsers/ManageUsers";
import ViewCategory from "../ViewCategory/ViewCategory";
import AddCategory from "../AddCategory/AddCategory";
import ChangePassword from "../ChangePassword/ChangePassword";
import Update from "../Update/Update";
import ForgetPassword from "../ForgetPassword/ForgetPassword";
import ResetPassword from "../ResetPassword/ResetPassword";
import Error from "../ErrorPage/Error";
function Routing() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Index />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/user" element={<User />}></Route>
        <Route path="/admin" element={<Admin />}></Route>
        <Route path="/logout" element={<LogOut />}></Route>
        <Route path="/manageusers" element={<ManageUsers />}></Route>
        <Route path="/viewcategory" element={<ViewCategory />}></Route>
        <Route path="/addcategory" element={<AddCategory />}></Route>
        <Route path="/update" element={<Update />}></Route>
        <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
        <Route path="/resetpassword" element={<ResetPassword />}></Route>
        <Route path="/*" element={<Error />}></Route>



        <Route path="/changepassword" element={<ChangePassword />}></Route>
      </Routes>
    </div>
  );
}

export default Routing;
