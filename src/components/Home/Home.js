import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'

const home = () =>{
    return (
        <>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Precio</th>
                    <th>Comprador</th>
                </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Teclado Gamer</td>
                        <td>1000000</td>
                        <td>Andres Corro Escobar</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Notebook</td>
                        <td>150000</td>
                        <td>Adolfo Wollerman</td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
};

export default home;
