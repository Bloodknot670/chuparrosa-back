import express from 'express';

//Se importan las funciones creadas en el controlador
import {getProveedores,getProveedor,createProveedor,deleteProveedor,updateProveedor} from '../controllers/proveedorController';
//Se crea el router con la ejecucion de express.Router()
const routerProveedor = express.Router();

//Se definen las rutas que se van a usar, se añade el tipo de peticion y la ruta

//Ruta para obtener todos los proveedores
routerProveedor.get('/proveedores',getProveedores);

//Ruta para obtener un proveedor por su id
routerProveedor.get('/proveedores/:id',getProveedor);

//Ruta para crear un proveedor
routerProveedor.post('/proveedores',createProveedor);

//Ruta para eliminar un proveedor
routerProveedor.delete('/proveedores/:id',deleteProveedor);

//Ruta para actualizar un proveedor
routerProveedor.put('/proveedores/:id',updateProveedor);

//Se exporta el router
export default routerProveedor;