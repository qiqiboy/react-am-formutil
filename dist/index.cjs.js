if (process.env.NODE_ENV === 'production') {
    module.exports = require('./react-am-formutil.cjs.production.js');
} else {
    module.exports = require('./react-am-formutil.cjs.development.js');
}
