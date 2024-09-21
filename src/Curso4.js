import React from 'react';
import { Accordion, Container, Table, ListGroup, Navbar, Nav } from 'react-bootstrap';

// Componente Footer
const Footer = () => (
    <footer className="bg-dark text-light text-center py-3 mt-5">
        <Container>
            <p>Desarrollado por Jennifer Martin</p>
        </Container>
    </footer>
);

function Curso4() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="mt-5">
                <h2 className="text-center mb-4">Curso 4: Ciberseguridad</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Información del Curso</Accordion.Header>
                        <Accordion.Body>
                            <p className="mb-4">En este curso exploraremos los principios fundamentales de la ciberseguridad, incluyendo técnicas para proteger sistemas y redes de amenazas cibernéticas.</p>
                            <Table striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                        <th>Temas</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Introducción a la Ciberseguridad</td>
                                        <td>Conceptos básicos, importancia de la ciberseguridad y sus aplicaciones.</td>
                                    </tr>
                                    <tr>
                                        <td>Tipos de Amenazas</td>
                                        <td>Malware, phishing, ransomware y otras amenazas comunes.</td>
                                    </tr>
                                    <tr>
                                        <td>Criptografía</td>
                                        <td>Uso de criptografía para proteger datos y comunicaciones.</td>
                                    </tr>
                                    <tr>
                                        <td>Seguridad en Redes</td>
                                        <td>Técnicas para proteger redes y sistemas contra ataques.</td>
                                    </tr>
                                    <tr>
                                        <td>Protección de Datos</td>
                                        <td>Normativas y estrategias para la protección de datos personales y empresariales.</td>
                                    </tr>
                                    <tr>
                                        <td>Respuesta a Incidentes</td>
                                        <td>Procedimientos para la gestión y respuesta a incidentes de seguridad.</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-primary text-light">Punto Clave 1: Fundamentos de la Ciberseguridad</ListGroup.Item>
                                <ListGroup.Item className="bg-primary text-light">Punto Clave 2: Amenazas Cibernéticas y Vulnerabilidades</ListGroup.Item>
                                <ListGroup.Item className="bg-primary text-light">Punto Clave 3: Técnicas de Criptografía y Seguridad en Redes</ListGroup.Item>
                                <ListGroup.Item className="bg-primary text-light">Punto Clave 4: Normativas de Protección de Datos</ListGroup.Item>
                                <ListGroup.Item className="bg-primary text-light">Punto Clave 5: Estrategias de Respuesta a Incidentes</ListGroup.Item>
                                <ListGroup.Item className="bg-primary text-light">Punto Clave 6: Tendencias Emergentes en Seguridad Cibernética</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

            <Footer />
        </div>
    );
}

export default Curso4;
