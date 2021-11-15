const multer = require('multer');

module.exports = multer.diskStorage({
    destination: function (_, __, cb) {
        cb(null, global.outputDir)
    },
    filename: function (_, file, cb) {
        const originalName = file.originalname.split('.');

        const extension = originalName.pop();
        const name = originalName.join('.');

        cb(null, `${name}-${Date.now()}.${extension}`);
    },
    onUploadProgress: console.log
});