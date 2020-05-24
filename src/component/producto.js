import React from 'react';
import { Table, Spinner } from 'react-bootstrap';

class Producto extends React.Component {

    constructor(props) {
        super(props)
        this.state = { productos: [] }
    };

    
    componentWillMount() {

        fetch('http://localhost/konecta/back/controlador/producto.consultar.php')
            .then((data) => {
                return data.json();
            }).then((productos) => {
                this.setState({ productos: productos })
            });
    }
    

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
                            <td>{item.nombre}</td>
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