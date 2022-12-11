"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const enviroment_1 = require("../global/enviroment");
const router_1 = __importDefault(require("../routers/router"));
class Servidorcito {
    constructor() {
        this.httpServer = new http_1.default.Server;
        this.options = {
            origin: ['*']
        };
        this.app = (0, express_1.default)();
        this.port = enviroment_1.SERVER_PORT;
        this.app.use((0, cors_1.default)(this.options));
        this.httpServer = new http_1.default.Server(this.app);
        this.httpServer;
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
        this.app.use('/', router_1.default);
        this.app.use((0, cors_1.default)({
            origin: true,
            credentials: true
        }));
    }
    static get instance() {
        return this._instance || (this._instance = new this());
    }
    start(callback) {
        this.httpServer.listen(this.port, callback);
    }
}
exports.default = Servidorcito;
