"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var index_1 = (0, tslib_1.__importDefault)(require("../index"));
it('should setup ok', function (done) {
    index_1["default"].setup()
        .then(done)["catch"](function (e) { return done(e); });
});
it('should stop ok', function (done) {
    index_1["default"].teardown()
        .then(done)["catch"](function (e) { return done(e); });
});
