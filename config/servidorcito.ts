import bodyParser from 'body-parser';
import cors from 'cors';
import express from 'express';
import http from 'http';
import { SERVER_PORT } from '../global/enviroment';
import router from '../routers/router';

export default class Servidorcito{

    private static _instance: Servidorcito
    public app: express.Application
    public port: number
    private httpServer = new http.Server;
    private options: cors.CorsOptions;

    private constructor(){


        this.options = {
            origin: ['*']
        }
        this.app = express();
        this.port=SERVER_PORT;
        this.app.use(cors(this.options))
        this.httpServer = new http.Server(this.app)
        this.httpServer
        this.app.use(bodyParser.urlencoded({extended:true}))
        this.app.use(bodyParser.json())
        this.app.use('/', router)
        this.app.use(cors({
        origin: true,
        credentials: true
    }))   
    }

    public static get instance(){
        return this._instance || (this._instance = new this())
    }

    start(callback: any){
        this.httpServer.listen(this.port, callback)
    }
}