import React from "react";
import { Form,Button } from "react-bootstrap";
import Api from "../services/api";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: "",
      contrasena: ""
    }
    this.api = new Api();
  };

  handleChangeUsuario = e => {
    this.setState({ usuario: e.target.value });
    console.log(this.state.usuario);
  };

  handleChangeContrasena = e => {
    this.setState({ contrasena: e.target.value });
    console.log("estado Contrasena"+ this.state.contrasena)
  };

  hanleSubmit = async () => {
    console.log("estado usuario"+ this.state.usuario)
    //const save = await this.api.loguearse({"usuario": this.state.usuario, "contrasena": this.state.contrasena});

      fetch('http://localhost/konecta/konecta/back/entorno/validarIngreso.php?Usuario=&Contrasena=password2020')
          .then((data) => {
            return data.json();
          }).then((productos) => {
        this.setState({ productos: productos })
      });
  };



  render() {
    return (

      <React.Fragment>
        {
          <Form id="formulario" >
            <Form.Group controlId="usuario">
              <Form.Label>Usuario</Form.Label>
              <Form.Control name="Usuario" type="text" placeholder="Ingrese su Usuario" value={this.state.usuario} onChange={this.handleChangeUsuario} />
            </Form.Group>

            <Form.Group controlId="contrasena">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control name="Contrasena" type="password" placeholder="Ingrese su Contraseña" onChange={this.handleChangeContrasena} />
            </Form.Group>

            <Button variant="primary" type="submit" onClick={this.hanleSubmit}>
              Enviar
            </Button>
          </Form>
        }
      </React.Fragment>
    )
  }
}

export default Login;
