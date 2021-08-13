const multer = require('multer');

module.exports = multer.diskStorage({
    destination: function (_, __, cb) {
        cb(null, global.outputDir)
    },
    filename: function (_, file, cb) {
        const [ extension, ...reversedName ] = file.originalname.split('.').reverse();

        const name = reversedName.reverse().join('.');

        cb(null, `${name}-${Date.now()}.${extension}`);
    },
    onUploadProgress: console.log
});