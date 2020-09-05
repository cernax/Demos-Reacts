import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {IconContext} from "react-icons";
import {BsPlusSquareFill} from "react-icons/bs/index";
import Table from "react-bootstrap/Table";
import {MdDelete, MdModeEdit} from "react-icons/md/index";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

let Prov = [
    {
        "id": 1,
        "Proveedor": "Juan S.A.",
        "Codigo": "prov-01"
    },
    {
        "id": 2,
        "Proveedor": "Company",
        "Codigo": "prov-02"
    }
]
function click(){

    var proveedor = document.getElementById('proveedor');
    var codproveedor = document.getElementById('codproveedor');
    Prov.push({id:3, Proveedor: proveedor.value, Codigo: codproveedor.value});
    return false;
}
const proveedor = () =>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);

    return (
        <>
            <div className={'row'} style={{ padding: "1em" }}>
                <h1>Proveedor</h1> &nbsp;&nbsp;
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
                    <th>Proveedor</th>
                    <th>Codigo</th>
                    <th style={{width:'7%'}}/>
                </tr>
                </thead>
                <tbody>
                    {
                        Prov.map(value => {
                            return <tr>
                                <td>{value.id}</td>
                                <td>{value.Proveedor}</td>
                                <td>{value.Codigo}</td>
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
            <Modal
                show={show}
                onHide={() => setShow(false)}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Ingreso de Proveedor
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="proveedor">
                            <Form.Label>Proveedor</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="codproveedor">
                            <Form.Label>Codigo</Form.Label>
                            <Form.Control type="text" placeholder="" />
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

export default proveedor;
