"use strict";
exports.__esModule = true;
var tslib_1 = require("tslib");
var mongoose_1 = (0, tslib_1.__importDefault)(require("mongoose"));
var mongodb_memory_server_1 = require("mongodb-memory-server");
var OpenapiNodegenMemMongoLoader = /** @class */ (function () {
    function OpenapiNodegenMemMongoLoader() {
    }
    OpenapiNodegenMemMongoLoader.prototype.setup = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, uri;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        // Load the memory database and oass uri to mongoose
                        _a = OpenapiNodegenMemMongoLoader;
                        return [4 /*yield*/, mongodb_memory_server_1.MongoMemoryServer.create()];
                    case 1:
                        // Load the memory database and oass uri to mongoose
                        _a.mongoServer = _b.sent();
                        uri = OpenapiNodegenMemMongoLoader.mongoServer.getUri();
                        return [4 /*yield*/, mongoose_1["default"].connect(uri, {
                                poolSize: 15,
                                useCreateIndex: true,
                                useNewUrlParser: true,
                                useFindAndModify: false,
                                useUnifiedTopology: true
                            })];
                    case 2:
                        _b.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OpenapiNodegenMemMongoLoader.prototype.teardown = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            return (0, tslib_1.__generator)(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, mongoose_1["default"].disconnect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, OpenapiNodegenMemMongoLoader.mongoServer.stop()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    OpenapiNodegenMemMongoLoader.mongoServer = {};
    return OpenapiNodegenMemMongoLoader;
}());
exports["default"] = new OpenapiNodegenMemMongoLoader();
