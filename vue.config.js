const path = require('path');
module.exports = {
    configureWebpack: {
        resolve: {

            alias: {
                environment: path.join(__dirname, 'src', 'environments', process.env.CLIENT_ENV),
            },
        },
    }
}