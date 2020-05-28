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
  };

  handleChangeContrasena = e => {
    this.setState({ contrasena: e.target.value });
  };

  hanleSubmit = async () => {
    await this.api.loguearse({Usuario: this.state.usuario, Contrasena: this.state.contrasena});
    //console.log(data)
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

              <Button variant="primary" onClick={this.hanleSubmit}>
                Enviar
              </Button>
            </Form>
          }
        </React.Fragment>
    )
  }
}

export default Login;