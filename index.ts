import router from "./routers/router";
import Servidorcito from "./config/servidorcito";

const server = Servidorcito.instance;

server.app.use('/', router)


server.start(()=>{
    console.log('Servidor Esto para vosotros SIUUUUUU')
    console.log(`http//localhost:${server.port}`)
});