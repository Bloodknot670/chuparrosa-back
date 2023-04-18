import {Request,Response} from 'express';
import Proveedor from '../models/Proveedor/proveedorModel';

//Se usa el modelo que se creo en el archivo proveedorModel.ts para acceder y hacer operaciones con la base de datos

//Metodo que se usara en la ruta para ejecutarlo cuando se llame a la ruta de obtener los proveedores
export const getProveedores = async (req:Request,res:Response) => {
    //Se obtienen los proveedores de la base de datos, 
    const proveedores = await Proveedor.find();
    //Se regresa el resultado
    res.json(proveedores);
}

//Metodo para buscar un proveedor por su id
export const getProveedor = async (req:Request,res:Response) => {
    //Se obtiene el id que se paso por la url
    const {id} = req.params;
    //Se busca el proveedor por su id
    const proveedor = await Proveedor.findById(id);
    //Se regresa el resultado
    res.json(proveedor);
}

//Metodo para crear un proveedor
export const createProveedor = async (req:Request,res:Response) => {
    //Se obtienen los datos que se pasaron por el body
    const {nombre,direccion,telefono,email,rfc,estatus} = req.body;
    //Se crea un nuevo proveedor con los datos que se obtuvieron
    const newProveedor = new Proveedor({nombre,direccion,telefono,email,rfc,estatus});
    //Se guarda el proveedor en la base de datos
    await newProveedor.save();
    //Se regresa el resultado
    res.json({message:"Proveedor creado"});
}

//Metodo para actualizar un proveedor
export const updateProveedor = async (req:Request,res:Response) => {
    //Se obtiene el id que se paso por la url
    const {id} = req.params;
    //Se obtienen los datos que se pasaron por el body
    const {nombre,direccion,telefono,email,rfc,estatus} = req.body;
    //Se busca el proveedor por su id y se actualizan los datos
    await Proveedor.findByIdAndUpdate(id,{nombre,direccion,telefono,email,rfc,estatus});
    //Se regresa el resultado
    res.json({message:"Proveedor actualizado"});
}

//Metodo para eliminar un proveedor
export const deleteProveedor = async (req:Request,res:Response) => {
    //Se obtiene el id que se paso por la url
    const {id} = req.params;
    //Se busca el proveedor por su id y se elimina
    await Proveedor.findByIdAndDelete(id);
    //Se regresa el resultado
    res.json({message:"Proveedor eliminado"});
}

//por ejemplo:

//import Venta from '../models/Proveedor/proveedorModel';
//import Producto from '../models/Producto/productoModel';

//el import es el que te permite usar las tablas de la base de datos, ya que el servicio de base de datos esta corriendo globalmente, por lo que no es necesario importarlo en cada archivo, solo en el archivo principal, en este caso el index.ts

//Podemos hacer una funcion del controlador que busque un registro de un producto y tome su nombre, para meterlo en el registro de una venta

/*const createVenta = async (req:Request,res:Response) => {
    //Se obtiene el registro del producto

    const {id,cantidad} = req.params;
    const {nombre}Producto.findById(id);

    //Se asigna el nombre del producto a la venta
    const Venta = new Venta({nombreProducto:nombreProducto,idProdcuto:id,cantidad:cantidad});

    //Se guarda la venta en la base de datos
    await Venta.save();*/