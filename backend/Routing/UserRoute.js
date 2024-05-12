const express = require("express");
const router = express.Router();
const {
  SignUp,
  SignIn,
  GetData,
  Update,
  Delete,
  Forgetpassword,
  ResetPassword,
  ChangePassword,
  AdminRole,
  UserRole,
} = require("../Controllers/UserController");
const Verifytoken = require("../Middleware/Jwt");

router.post("/signup", SignUp);
router.post("/signin", SignIn);
router.get("/getdata", Verifytoken, GetData);
router.put("/update/:id", Update);
router.delete("/delete/:id", Delete);
router.post("/forgetpassword", Forgetpassword);
router.post("/resetpassword", ResetPassword);
router.put("/changepassword/:id", ChangePassword);
router.put("/adminrole/:id", AdminRole);
router.put("/userrole/:id", UserRole);

module.exports = router;
