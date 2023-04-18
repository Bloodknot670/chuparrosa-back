import express from 'express';
//Import para la conexion a la base de datos
import {dbConnection} from './db/connection';

//Imports de las rutas
import routerProveedor from './routes/Proveedor.routes';

const app = express();

//Middlewares
app.use(express.json());

//Routes
app.use(routerProveedor);
//Configuracion del server y su puerto
app.listen(3000, () => {
    //Ejecucion de la conexion a la base de datos
    dbConnection();
    console.log('Server running on port 3000');
});