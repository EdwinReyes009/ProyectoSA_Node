"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.queryPro = exports.conn = void 0;
const mysql_1 = require("mysql");
const enviroment_1 = require("../global/enviroment");
let pool;
const conn = () => {
    try {
        pool = (0, mysql_1.createPool)(enviroment_1.DB_CONFIG);
    }
    catch (error) {
        console.error('Conn ERROR', error);
        throw new Error('Failed');
    }
};
exports.conn = conn;
const queryPro = (query, params) => {
    try {
        if (!pool)
            throw new Error('Pool no creado');
        return new Promise((resolve, reject) => {
            pool.query(query, params, (error, results) => {
                if (error)
                    reject(error);
                else
                    resolve(results);
            });
        });
    }
    catch (error) {
        console.error('Query ERROR', error);
        throw new Error('Failed to execute');
    }
};
exports.queryPro = queryPro;
