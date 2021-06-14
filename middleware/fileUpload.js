const multer = require('multer');
function fileFilter(req, file, cb) {
    if (file.mimetype !== 'image/png') {
        // The function should call `cb` with a boolean
        // to indicate if the file should be accepted

        // To reject this file pass `false`, like so:
        return cb("Invalid File", false)
    }
}
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/uploads')
    },
    filename: function (req, file, cb) {
        // cb(null, file.fieldname + '-' + Date.now())
        cb(null, file.fieldname + '-' + Date.now() + "." + file.mimetype.split('/')[1])
    }
})

var upload = multer({ storage: storage,fileFilter });
module.exports = upload;