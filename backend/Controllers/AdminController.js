const categorymodel = require("../Models/AddCategory");
const UserModel = require("../Models/UserModel");

const AddCategory = async (req, res) => {
  const { catname } = req.body;
  const { filename } = req.file;
  try {
    if (!catname || !filename) {
      res.send({
        message: "Required All the Field",
      });
    } else {
      const admindata = await categorymodel.create({
        catname: catname,
        caticon: filename,
      });
      res.send({
        message: "Category Added Successfully",
        admindata: admindata,
      });
    }
  } catch (error) {
    res.send({
      message: "Something Went Wrong In Add Category",
    });
  }
};

const ViewCategory = async (req, res) => {
  try {
    if (categorymodel.length > 0) {
      const categorydata = await categorymodel.find();
      res.send({
        message: "View Category successfully",
        categorydata: categorydata,
      });
    } else {
      res.send({
        message: "No Product Found",
      });
    }
  } catch (error) {
    res.send({
      message: "Something Went Wrong In View Category",
    });
  }
};

const DeleteCategory = async (req, res) => {
  try {
    const deletedata = await categorymodel.findByIdAndDelete(req.params.id);
    res.send({
      message: "Category Deleted Successfully",
    });
  } catch (error) {
    res.send({
      message: "Something Went Wrong In Delete Category",
    });
  }
};


module.exports = { AddCategory, ViewCategory, DeleteCategory };
