const mongoose = require("mongoose");
const connection = mongoose
  .connect(`mongodb+srv://shravan:12345@cluster0.aha94nc.mongodb.net/user-management
  `)
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => {
    console.log("MongoDB  Not Connected");
  });
module.exports = connection;

// mongodb://127.0.0.1:27017/usermanagement