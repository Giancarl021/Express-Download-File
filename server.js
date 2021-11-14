require('./src/services/environment')();

const app = require('./src/app');

app.listen(global.port, () => console.log(`Listening on port ${global.port}\nSaving files on ${global.outputDir}`));
