import {Router} from 'express';
import * as MySQLConnector from '../config/dbs';
import { queryPro } from '../config/dbs';

const router = Router();
MySQLConnector.conn();

router.get('/fifa', (req, res)=>{
    res.json({'succes':1});
});



// router.post('/fifa', (req, res)=>{

//     const datos = req.body;
//     queryPro("INSERT INTO usuarios (name, email, password) VALUES ('Roberto', 'roberto@mail.com', 'roberto');", []);
//     let rows = queryPro("SELECT * FROM usuarios", []);
//     console.log(rows);
//     res.json({'succes':1, 'data': rows});
// });

router.post('/mundial', (request, response)=>{
  const equipo = request.body.equipo;

  queryPro("INSERT INTO equipos (nombre) VALUES ('"+equipo+"'));",[]);

  response.json([{data:equipo}])
});


export default router;