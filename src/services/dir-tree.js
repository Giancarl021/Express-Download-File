const fs = require('fs/promises');

module.exports = function (path) {
    async function analyse() {
        return await scan(path);
    }

    async function scan(path) {
        const r = [];
        const result = await fs.readdir(path);

        await Promise.all(
            result.map(async item => {
                const _path = `${path}/${item}`;

                const stat = await fs.lstat(_path);

                if (stat.isDirectory()) {
                    r.push({
                        path: normalize(_path),
                        type: 'directory',
                        children: await scan(_path)
                    });
                } else {
                    r.push({
                        path: normalize(_path),
                        type: 'file'
                    });
                }
            })
        );

        return r;
    }

    function normalize(_path) {
        return _path.split(/(\\|\/)/g).pop();
    }

    return { analyse };
}