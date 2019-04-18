if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-antm-formutil.umd.production.js');
} else {
    module.exports = require('./react-antm-formutil.umd.development.js');
}

