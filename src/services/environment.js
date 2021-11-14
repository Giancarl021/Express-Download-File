const { argv: args } = require('yargs');
const dotenv = require('dotenv');
const fs = require('fs');
const locate = require('@giancarl021/locate');

const dirs = [ 'data' ];

module.exports = function () {
    dotenv.config();

    dirs
        .map(locate)
        .forEach(dir => {
            fs.mkdirSync(dir, { recursive: true })
        });

    global.outputDir = locate(args._.join(' ') || process.env.OUTPUT_DIR || 'data');
    global.port = args.p || args.port || process.env.PORT || 80;
}
