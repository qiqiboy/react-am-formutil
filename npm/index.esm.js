if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-antm-formutil.esm.production.js');
} else {
    module.exports = require('./react-antm-formutil.esm.development.js');
}
