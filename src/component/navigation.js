import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <React.Fragment>
            <ul>
                <li>
                    <Link exact to="/dashboard">Dashboard</Link>
                </li>
                <li>
                    <Link exact to="/producto">Productos</Link>
                </li>
                <li>
                    <Link to="/nuevo-producto">Nuevo Producto</Link>
                </li>
            </ul>
        </React.Fragment>
    );
};

export default Nav;