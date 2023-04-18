import mongoose from "mongoose";

mongoose.set("strictQuery",true);

export const dbConnection = async () => {
    try{
        //Aqui se conecta a la base de datos, si no se define la ruta de conexion, se le pasa el string vacio
        await mongoose.connect("direccion de la bd"||"");
        console.log("Base de datos conectada");
    }catch(error){
        console.log(error);
        throw error;
    }
};

