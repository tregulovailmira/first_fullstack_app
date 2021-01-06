const multer = require('multer');
const path = require('path');
const { staticPath } = require('./../config/config');

//const upload = multer({ dest: path.join(staticPath, '/images') });

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // console.log('staticPath>>', staticPath);
    cb(null, path.join(staticPath, '/images'));
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + '-' + file.originalname);
  },
});

const MIMETYPE_REGEXP = /^image\/(gif|jpeg|jpg|png)/;

function fileFilter(req, file, cb) {
  cb(null, MIMETYPE_REGEXP.test(file.mimetype));
}

const upload = multer({ storage: storage, fileFilter: fileFilter });

module.exports = upload;
