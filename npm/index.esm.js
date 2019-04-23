if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-am-formutil.esm.production.js');
} else {
    module.exports = require('./react-am-formutil.esm.development.js');
}
