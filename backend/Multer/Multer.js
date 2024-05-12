const multer = require("multer");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./Category");
  },
  filename: function (req, file, cb) {
    cb(null, `image-${Date.now()}.${file.originalname}`);
  },
});
const Upload = multer({ storage: storage });
module.exports = Upload;
