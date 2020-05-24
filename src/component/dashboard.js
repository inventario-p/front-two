import React from 'react';
import { Spinner,Card } from 'react-bootstrap';
import Nav from './navigation';
class Dashboard extends React.Component {

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

                <Nav></Nav>

                {
                    this.state.productos.map(item =>

                        <Card key={item.id}>
                            <Card.Body>
                                <Card.Title>{item.nombre}</Card.Title>
                            </Card.Body>
                        </Card>
                    )
                }
                </React.Fragment>
            )
        } else {
            return <Spinner animation="grow" />
        }
    }
}

export default Dashboard;