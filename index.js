/*!
 * X-Powered-By header extension
 * @author Andrew Teologov <teologov.and@gmail.com>
 * @date 5/11/15
 */

"use strict";

/* global version */

module.exports = {
    extension(app) {
        app.middleware(function* (next) {
            this.res.setHeader("X-Powered-By", "Teo.JS v" + version);
            yield next;
        });
    }
};