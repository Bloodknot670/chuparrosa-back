import {Schema,model} from 'mongoose';

//Se crea el modelo de las propiedades que tendra el proveedor
interface IProveedor{
    nombre:string;
    direccion:string;
    telefono:string;
    email:string;
    rfc:string;
    estatus:boolean;
}

//Se define el esquema basado al tipo de datos que tendra el proveedor dentro de <nombreInterfaz>

//*El schema solo puede contener propiedades de lo que se definio en la interfaz
const ProveedorSchema:Schema = new Schema<IProveedor>({
    //Propiedad
    nombre:{
        //Tipo que va guardar
        //El required es para definir si es obligatorio o no y el mensaje que mostrara de error 
        type:String,
        required:[true,"El nombre es obligatorio"],
    },
    direccion:{
        type:String,
        required:[true,"La direccion es obligatoria"],
    },
});

//Se exporta el modelo con el nombre que se le quiera dar y el esquema que se definio
export default model("Proveedor",ProveedorSchema);