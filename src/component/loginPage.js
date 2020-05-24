import React from "react";
import { Form, Button } from "react-bootstrap";
//import styles from '../assets/styles/Login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      nombre: "",
      contrasena: "",
      mensaje: ""
    }
  }

  componentWillMount() {

    fetch('http://localhost/konecta/back/controlador/producto.consultar.php')
      .then((data) => {
        return data.json();
      }).then((mensaje) => {
        this.setState({ mensaje: mensaje})
      });
  }

    // handleChange(event) {
    //   this.setState({ nombre: event.target.value });
    // }

  render() {
    return (
      <React.Fragment>
        {
          // <form>
          //   <label htmlFor="name">Name:</label>
          //   <input  id="name" type="text" onChange={this.handleChange} />
          //   <input type="submit" value="Enviar" />
          // </form>

          <Form>
            <Form.Group controlId="usuario">
              <Form.Label>Usuario</Form.Label>
              <Form.Control type="text" placeholder="Ingrese su Usuario" />
            </Form.Group>

            <Form.Group controlId="contrasena">
              <Form.Label>Contraseña</Form.Label>
              <Form.Control type="password" placeholder="Ingrese su Contraseña" />
            </Form.Group>
            
            <Button variant="primary" type="submit" >
              Enviar
            </Button>
          </Form>
        }
      </React.Fragment>
    )
  }
}

export default Login;
