if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-antm-formutil.cjs.production.js');
} else {
    module.exports = require('./react-antm-formutil.cjs.development.js');
}
