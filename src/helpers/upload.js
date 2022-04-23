const multer = require("multer");

//@func upload
//@desc uploads image from client to application disc for easy access
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

module.exports = upload;
