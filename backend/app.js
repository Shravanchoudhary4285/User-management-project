const express = require("express");
const app = express();
const cors = require("cors");
const connection = require("./Models/Connection");
const userRouter = require("./Routing/UserRoute");
const adminRouter = require("./Routing/AdminRoute");
const path = require("path");
const port=process.env.PORT||3005
app.use(cors());
app.use(express.json());
app.use("/Category", express.static(path.join(__dirname, "/Category")));
app.use("/", userRouter);
app.use("/", adminRouter);

app.listen(port, () => {
  console.log(`server is running on http://localhost:${port}`);
});
