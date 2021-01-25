"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var dotenv = __importStar(require("dotenv"));
if (!((_a = process === null || process === void 0 ? void 0 : process.env) === null || _a === void 0 ? void 0 : _a.NODE_ENV)) {
    dotenv.config();
}
var dev = "development";
exports.default = {
    env: process.env.NODE_ENV || dev,
    server: {
        root: process.env.SERVER_ROOT || "/api",
        host: process.env.SERVER_HOST || "localhost",
        port: process.env.SERVER_PORT || 3003,
        origins: process.env.ORIGINS || "http://localhost:3000,http://localhost:3001,http://localhost:3002",
    },
    params: {
        envs: {
            dev: dev,
            pdn: "production",
            test: "testing",
        },
        defaultError: {
            code: 500,
            message: "SOMETHING_WENT_WRONG",
        },
        defaultLang: "en",
    },
};
//# sourceMappingURL=index.js.map