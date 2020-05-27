import React from 'react';
import { Table, Spinner, Button } from 'react-bootstrap';

class Producto extends React.Component {

    constructor(props) {
        super(props)
        this.state = { productos: [] }
    };

    
    componentWillMount() {

        fetch('http://localhost/konecta/konecta/back/controlador/producto.consultar.php')
            .then((data) => {
                return data.json();
            }).then((productos) => {
                this.setState({ productos: productos })
            });
    }
    
    del(id) {
        console.log("try delete "+id)
        return true;
    }    
    eliminar(id) {
        fetch('http://localhost/konecta/back/controlador/producto.eliminar.php', {
            method: 'POST',
            body: 'id'+{id}
        })
        .then((data) => {
            return data.json();
        }).then((productos) => {
            this.setState({ productos: productos })
        });    }

    render() {

        if (this.state.productos.length > 0) {
            return (
                <React.Fragment>

                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Referencia</th>
                            <th>Precio</th>
                            <th>Peso</th>
                            <th>Categoria</th>
                            <th>Stock</th>
                            <th>del</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.productos.map(item =>
                        <tr key={item.id}>
                            <td>{item.nombre}</td>
                            <td>{item.referencia}</td>
                            <td>{item.precio}</td>
                            <td>{item.peso}</td>
                            <td>{item.categoria}</td>
                            <td>{item.stock}</td>
                            <td>
                            <Button onClick={this.del(item.id)}>
                                a
                            </Button>
                            </td>
                        </tr>)
                    }
                    </tbody>
                </Table>

                </React.Fragment>

            )
        }else {
            return (
                <Spinner animation="grow" />
            )
        }
    }
}

export default Producto;