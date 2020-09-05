import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IconContext} from "react-icons";
import {BsPlusSquareFill} from "react-icons/bs/index";
import Table from "react-bootstrap/Table";
import {MdDelete, MdModeEdit} from "react-icons/md/index";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
let Prod = [
    {
        "id": 1,
        "Producto": "Notebook",
        "Codigo": "prod-01",
        "Precio": "100000"
    },
    {
        "id": 2,
        "Producto": "Teclado Gamer",
        "Codigo": "prod-02",
        "Precio": "150000"
    }
]
function click(){

    var producto = document.getElementById('producto');
    var codigo = document.getElementById('codigo');
    var precio = document.getElementById('precio');
    var proveedor = document.getElementById('proveedor');
    //, Codigo:proveedor.options[proveedor.selectedIndex].value
    Prod.push({id:3, Producto: producto.value, Codigo: codigo.value, Precio:precio.value});
    return false;
}
const productos = () =>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={'row'} style={{ padding: "1em" }}>
                <h1>Productos</h1> &nbsp;&nbsp;
                <IconContext.Provider value={{  size: "3em", color: 'green', style:{verticalAlign: "middle"}}}>
                    <div>
                        <span onClick={ () => setShow(true)} style={{ cursor: 'pointer' }}><BsPlusSquareFill /></span>
                    </div>
                </IconContext.Provider>
            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Producto</th>
                    <th>Codigo</th>
                    <th>Precio</th>
                    <th style={{width:'7%'}}/>
                </tr>
                </thead>
                <tbody>
                {
                    Prod.map(value => {
                        return <tr>
                            <td>{value.id}</td>
                            <td>{value.Producto}</td>
                            <td>{value.Codigo}</td>
                            <td>{value.Precio}</td>
                            <td>
                                <IconContext.Provider value={{  size: "2em", style:{verticalAlign: "middle"}}}>
                                    <div style={{textAlign:'center'}}>
                                        <span style={{ cursor: 'pointer' }}><MdModeEdit/></span>
                                        <span style={{ cursor: 'pointer' }}><MdDelete/></span>
                                    </div>
                                </IconContext.Provider>
                            </td>
                        </tr>
                    })
                }
                </tbody>
            </Table>
            <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title" >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Ingreso de Producto
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="producto">
                            <Form.Label>Producto</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="codigo">
                            <Form.Label>Codigo</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="precio">
                            <Form.Label>Precio</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="proveedor">
                            <Form.Label>Proveedor</Form.Label>
                            <Form.Control as="select">
                                <option>Proveedor 1</option>
                                <option>Proveedor 2</option>
                                <option>Proveedor 3</option>
                                <option>Proveedor 4</option>
                                <option>Proveedor 5</option>
                            </Form.Control>
                        </Form.Group>
                        <Button variant="primary"  onClick={() => setShow(click)}>
                            Guardar
                        </Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default productos;
