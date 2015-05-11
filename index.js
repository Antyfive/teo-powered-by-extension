/*!
 * X-Powered-By header extension
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 5/11/15
 */

/* global version */

module.exports = {
    extension: function(app) {
        app.middleware(function(req, res, next) {
            res.setHeader("X-Powered-By", "Teo.js v" + version);
            next();
        });
    }
};
