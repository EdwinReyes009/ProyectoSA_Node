"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const router_1 = __importDefault(require("./routers/router"));
const servidorcito_1 = __importDefault(require("./config/servidorcito"));
const server = servidorcito_1.default.instance;
server.app.use('/', router_1.default);
server.start(() => {
    console.log('Servidor Esto para vosotros SIUUUUUU');
    console.log(`http//localhost:${server.port}`);
});
