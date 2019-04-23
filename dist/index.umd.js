if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-am-formutil.umd.production.js');
} else {
    module.exports = require('./react-am-formutil.umd.development.js');
}

