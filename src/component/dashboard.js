import React from 'react';
import { Button,Card } from 'react-bootstrap';

class Dashboard extends React.Component {

    constructor(props) {
        super(props)
        this.state = { countries: [] }
    }

    componentWillMount() {

        fetch('https://restcountries.eu/rest/v2/all')
            .then((data) => {
                return data.json();
            }).then((countries) => {
                this.setState({ countries: countries })
            });
    }


    render() {

        if (this.state.countries.length > 0) {
            return (
             
                <React.Fragment>

                {
                    this.state.countries.map(item =>

                        <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={item.flag}  style={{ width: '150px' }}/>
                            <Card.Body>
                                <Card.Title>{item.name}</Card.Title>
                            </Card.Body>
                        </Card>
                    )
                }

                </React.Fragment>


            )
        } else {
            return <p className="text-center">Cargando paises...</p>
        }
    }
}

export default Dashboard;