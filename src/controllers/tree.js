const Tree = require('../services/dir-tree');

const tree = Tree(global.outputDir);

module.exports = async function (_, response) {
    const files = await tree.analyse();

    return response.json(files);
}