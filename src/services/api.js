import axios from "axios";
import { URL } from  "./constante";
import qs from 'qs';

class Api {
    constructor() {
        console.log("Ingresando a Api");
    }
    async guardarProducto(data){
        const save = await axios.post(`${URL}/controlador/producto.adicionar.php`, data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async loguearse(data){
        /*await axios.post(`http://localhost/back-two/controlador/validarUsuario.php`, data)
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });*/
        await axios({
            method: 'post',
            url: `${URL}/entorno/validarIngreso.php`,
            data: qs.stringify(data),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
            .then((response) => {
                console.log(response);
                if(response.data.exito == '1'){
                    console.log("redirect")
                    window.location.href ="./producto";
                }
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async validarUsuario(data){

        await axios({
            method: 'post',
            url: `${URL}/controlador/validarUsuario.php`,
            data: qs.stringify(data),
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }

    async cerrarSesion(data){

        await axios({
            method: 'post',
            url: `${URL}/entorno/cerrarSesion.php`,
            headers: {
                'content-type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }
}

export default Api;