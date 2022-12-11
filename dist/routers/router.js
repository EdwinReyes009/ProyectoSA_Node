"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
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
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const MySQLConnector = __importStar(require("../config/dbs"));
const dbs_1 = require("../config/dbs");
const router = (0, express_1.Router)();
MySQLConnector.conn();
router.get('/fifa', (req, res) => {
    res.json({ 'succes': 1 });
});
// router.post('/fifa', (req, res)=>{
//     const datos = req.body;
//     queryPro("INSERT INTO usuarios (name, email, password) VALUES ('Roberto', 'roberto@mail.com', 'roberto');", []);
//     let rows = queryPro("SELECT * FROM usuarios", []);
//     console.log(rows);
//     res.json({'succes':1, 'data': rows});
// });
router.post('/mundial', (request, response) => {
    const equipo = request.body.equipo;
    (0, dbs_1.queryPro)("INSERT INTO equipos (nombre) VALUES ('" + equipo + "'));", []);
    response.json([{ data: equipo }]);
});
exports.default = router;
