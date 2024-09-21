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

function Curso1() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="mt-5">
                <h2 className="text-center mb-4">Curso 1: Desarrollo Web</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Información del Curso</Accordion.Header>
                        <Accordion.Body>
                            <p className="mb-4">Explora los fundamentos del desarrollo web moderno, incluyendo diseño de interfaces, programación de servidores, y bases de datos.</p>
                            <Table striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                        <th>Temas</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>HTML & CSS</td>
                                        <td>Aprende a construir y diseñar sitios web con HTML y CSS.</td>
                                    </tr>
                                    <tr>
                                        <td>JavaScript</td>
                                        <td>Programación dinámica para hacer sitios web interactivos.</td>
                                    </tr>
                                    <tr>
                                        <td>Frameworks y Librerías</td>
                                        <td>Uso de herramientas como React, Angular y Vue.js.</td>
                                    </tr>
                                    <tr>
                                        <td>Desarrollo Backend</td>
                                        <td>Introducción a la programación del lado del servidor con Node.js y Express.</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-primary text-light">Punto Clave 1: Fundamentos de HTML y CSS</ListGroup.Item>
                                <ListGroup.Item className="bg-primary text-light">Punto Clave 2: JavaScript y Programación Dinámica</ListGroup.Item>
                                <ListGroup.Item className="bg-primary text-light">Punto Clave 3: Frameworks Frontend (React, Angular)</ListGroup.Item>
                                <ListGroup.Item className="bg-primary text-light">Punto Clave 4: Desarrollo Backend y APIs</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

            <Footer />
        </div>
    );
}

export default Curso1;
