import React, {Component, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Table from 'react-bootstrap/Table'
import { BsPlusSquareFill } from 'react-icons/bs';
import { MdDelete, MdModeEdit } from 'react-icons/md';
import { IconContext } from "react-icons";
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import $ from 'jquery';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

let InfoUser = [
    {
        "id": 1,
        "RazonSocial": "Andres Corro Escobar",
        "FechaNacimiento": "16/06/1994",
        "Edad": 26
    },
    {
        "id": 2,
        "RazonSocial": "Adolfo Wollerman",
        "FechaNacimiento": "19/08/1990",
        "Edad": 30
    }
]

var today = new Date().toLocaleDateString('en-GB', {
    day : 'numeric',
    month : 'numeric',
    year : 'numeric'
}).split(' ').join('/');

function click(){

    var nom = document.getElementById('name');
    debugger;
    var fecnac = document.getElementById('cumpleañosfec');
    var cumpleanos = new Date(fecnac.value);
    var today = new Date();
    var edad = today.getFullYear() - cumpleanos.getFullYear();
    InfoUser.push({id:3, RazonSocial: nom.value, FechaNacimiento: fecnac.value, Edad: edad});
    return false;
}

const usuarios = () =>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [show, setShow] = useState(false);

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [startDate, setStartDate] = useState(new Date());

    return (
        <>
            <div className={'row'} style={{ padding: "1em" }}>
                <h1>Usuarios</h1> &nbsp;&nbsp;
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
                    <th>Razon Social</th>
                    <th>Fecha Nacimiento</th>
                    <th>Edad</th>
                    <th style={{width:'7%'}}/>
                </tr>
                </thead>
                <tbody>
                {
                    InfoUser.map(value => {
                        return <tr>
                        <td>{value.id}</td>
                        <td>{value.RazonSocial}</td>
                        <td>{value.FechaNacimiento}</td>
                        <td>{value.Edad}</td>
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

            <Modal show={show} onHide={() => setShow(false)} dialogClassName="modal-90w" aria-labelledby="example-custom-modal-styling-title">
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Ingreso de Usuarios
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group controlId="name">
                            <Form.Label>Razon Social</Form.Label>
                            <Form.Control type="text" placeholder="" />
                        </Form.Group>
                        <Form.Group controlId="fecdatenac">
                            <Form.Label>Fecha de Nacimiento</Form.Label><br />
                            <DatePicker id='cumpleañosfec' selected={startDate}  onChange={date => setStartDate(date)} />
                        </Form.Group>
                        <Button variant="primary" onClick={() => setShow(click)} >Guardar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </>
    );
};

export default usuarios;

