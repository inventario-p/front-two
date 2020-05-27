import axios from "axios";
import {URL} from  "./constante";

class Api {
    constructor() {
        console.log("Ingresando a Api");
    }
    async guardarProducto(data){
        console.log(data)
        const save = await axios.post(`${URL}/controlador/producto.adicionar.php`, data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async loguearse(data){
        console.log(data)
        /*await axios.post(`${URL}/entorno/validaringreso.php?Usuario=${data.usuario}&Contrasena=${data.contrasena}`)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });*/
    }
}

export default Api;