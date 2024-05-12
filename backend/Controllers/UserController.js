const userModel = require("../Models/UserModel");
const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const SignUp = async (req, res) => {
  const { name, email, password, mobile, gender, state, city, pincode } =
    req.body;

  try {
    const ExistingUser = await userModel.findOne({ email: email });
    if (
      !name ||
      !email ||
      !password ||
      !mobile ||
      !gender ||
      !state ||
      !city ||
      !pincode
    ) {
      res.send({
        message: "Required All The Field",
      });
    } else if (ExistingUser) {
      res.send({
        message: "User Already Axist",
      });
    } else {
      const hashpassword = await bcrypt.hash(password, 12);
      const userdata = await userModel.create({
        name: name,
        email: email,
        password: hashpassword,
        mobile: mobile,
        gender: gender,
        address: {
          state: state,
          city: city,
          pincode: pincode,
        },
        role: "user",

        status: 0,
        info: Date(),
      });
      res.send({
        message: "User Register Successfully",
        userdata: userdata,
      });
    }
  } catch (error) {
    res.send({
      message: "Something Went Wrong In Register",
    });
  }
};
const SignIn = async (req, res) => {
  const { email, password } = req.body;

  const userdata = await userModel.findOne({ email: email });
  try {
    if (!email || !password) {
      res.send({
        message: "Required All The Field",
      });
    } else if (userdata) {
      const matchpassword = await bcrypt.compare(password, userdata.password);
      if (matchpassword) {
        const token = jwt.sign(
          { _id: userdata._id, email: userdata.email },
          process.env.SECRETKEY,
          { expiresIn: "10d" }
        );
        res.send({
          message: "LogIn Successfully",
          userdata: userdata,
          token: token,
        });
      } else {
        res.send({
          message: "Password Does Not Match",
        });
      }
    } else {
      res.send({
        message: "Invalid User",
      });
    }
  } catch (error) {
    res.send({
      message: "Something Went Wrong In LogIn",
    });
  }
};

const GetData = async (req, res) => {
  try {
    if (userModel.length > 0) {
      const result = await userModel.find();
      res.send({
        message: "Data Get Successfully",
        result: result,
      });
    } else {
      res.send({
        message: "No Users Found",
      });
    }
  } catch (error) {
    res.send({
      message: "Something Went Wrong In Getdata",
    });
  }
};

const Update = async (req, res) => {
  const { name, email, password, mobile, gender, state, city, pincode } =
    req.body;
  try {
    const UpdateData = await userModel.findByIdAndUpdate(req.params.id, {
      name: name,
      email: email,
      mobile: mobile,
      gender: gender,
      address: {
        state: state,
        city: city,
        pincode: pincode,
      },
    });
    res.send({
      message: "Data update Successfully",
      UpdateData: UpdateData,
    });
  } catch (error) {
    res.send({
      message: "Something Went Wrong In Update",
    });
  }
};
const Delete = async (req, res) => {
  try {
    const DeleteData = await userModel.findByIdAndDelete(req.params.id);
    res.send({
      message: "Data Deleted SuccessFully",
      DeleteData: DeleteData,
    });
  } catch (error) {
    res.send({
      message: "Something Went Wrong In Delete",
    });
  }
};

const Forgetpassword = async (req, res) => {
  const { email } = req.body;
  const data = await userModel.findOne({ email: email });
  if (!email) {
    res.send({
      message: "Please Enter Your Email",
    });
  } else if (!data) {
    res.send({
      message: "Invalid User",
    });
  } else {
    const otp = Math.floor(Math.random() * 1000000);
    console.log(otp);
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASS,
      },
    });
    const mailoption = {
      from: process.env.EMAIL,
      to: email,
      subject: "OTP For Reset Password",
      text: `Your Forget password Otp is :${otp}`,
    };
    const info = await transport.sendMail(mailoption);
    if (info) {
      const resetdata = await userModel.updateOne(
        {
          email: email,
        },
        { otp: otp }
      );
      if (resetdata) {
        res.send({
          status: true,
          message: "Otp Has Been Send Check Your Eamil",
        });
      } else {
        res.send({
          status: false,
          message: "Nodemailer Error ",
        });
      }
    } else {
      res.send({
        message: "Somethin Went Wrong In Send otp",
      });
    }
  }
};

const ResetPassword = async (req, res) => {
  const { otp, password } = req.body;
  try {
    const checkotp = await userModel.findOne({
      otp: otp,
    });
    if (checkotp) {
      const hashpassword = await bcrypt.hash(password, 10);
      const updatepass = await userModel.updateOne(
        {
          email: checkotp.email,
        },
        { password: hashpassword, otp: "" }
      );
      if (updatepass) {
        res.send({
          status: true,
          message: "Password Updated Successfully",
        });
      } else {
        res.send({
          status: true,
          message: "Password Not Updated",
        });
      }
    } else {
      res.send({
        message: "Otp Does Not Match",
      });
    }
  } catch {
    res.send({
      message: "Something went Wrong In Reset Password",
    });
  }
};

const ChangePassword = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    const comparepassword = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!req.body.password || !req.body.newpassword) {
      res.send({
        message: "Required All The Field",
      });
    } else if (!comparepassword) {
      res.send({
        message: "Your Current Password Is Wrong",
      });
    } else {
      const hashpassword = await bcrypt.hash(req.body.newpassword, 10);
      const updatepassword = await userModel.updateOne({
        password: hashpassword,
      });
      if (updatepassword) {
        res.send({
          status: true,
          message: "Password Change Succesfully",
        });
      } else {
        res.send({
          message: "Password Not Change",
        });
      }
    }
  } catch {
    res.send({
      message: "Something Went Wrong In Change Password",
    });
  }
};

const UserRole = async (req, res) => {
  const userrole = await userModel.findByIdAndUpdate(req.params.id, {
    role: "user",
  });
  res.send({
    data: userrole,
    message: "role updated",
  });
};
const AdminRole = async (req, res) => {
  try {
    const adminrole = await userModel.findByIdAndUpdate(req.params.id, {
      role: "admin",
    });
    res.send({
      data: adminrole,
      message: "role updated",
    });
  } catch (error) {
    res.send({
      message: "Something went wrong",
    });
  }
};

module.exports = {
  SignUp,
  SignIn,
  GetData,
  Update,
  Delete,
  Forgetpassword,
  ResetPassword,
  ChangePassword,
  AdminRole,
  UserRole
};
