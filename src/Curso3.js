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

function Curso3() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="mt-5">
                <h2 className="text-center mb-4">Curso 3: Inteligencia Artificial</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Información del Curso</Accordion.Header>
                        <Accordion.Body>
                            <p className="mb-4">Este curso ofrece una introducción completa a la Inteligencia Artificial (IA), abordando conceptos fundamentales y técnicas avanzadas.</p>
                            <Table striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                        <th>Temas</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Introducción a la IA</td>
                                        <td>Conceptos básicos de IA, historia y aplicaciones actuales.</td>
                                    </tr>
                                    <tr>
                                        <td>Algoritmos de Aprendizaje Supervisado</td>
                                        <td>Modelos y técnicas como regresión lineal, máquinas de soporte vectorial y redes neuronales.</td>
                                    </tr>
                                    <tr>
                                        <td>Algoritmos de Aprendizaje No Supervisado</td>
                                        <td>Clustering, reducción de dimensionalidad y análisis de componentes principales.</td>
                                    </tr>
                                    <tr>
                                        <td>Redes Neuronales y Deep Learning</td>
                                        <td>Estructura y entrenamiento de redes neuronales profundas para resolver problemas complejos.</td>
                                    </tr>
                                    <tr>
                                        <td>Procesamiento de Lenguaje Natural (NLP)</td>
                                        <td>Técnicas para el análisis y generación de lenguaje natural usando modelos de IA.</td>
                                    </tr>
                                    <tr>
                                        <td>Aplicaciones y Ética en IA</td>
                                        <td>Exploración de aplicaciones prácticas de IA y consideraciones éticas y sociales.</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-success text-light">Punto Clave 1: Historia y Fundamentos de la IA</ListGroup.Item>
                                <ListGroup.Item className="bg-success text-light">Punto Clave 2: Algoritmos de Aprendizaje Supervisado y No Supervisado</ListGroup.Item>
                                <ListGroup.Item className="bg-success text-light">Punto Clave 3: Redes Neuronales y Técnicas de Deep Learning</ListGroup.Item>
                                <ListGroup.Item className="bg-success text-light">Punto Clave 4: Procesamiento de Lenguaje Natural (NLP)</ListGroup.Item>
                                <ListGroup.Item className="bg-success text-light">Punto Clave 5: Aplicaciones Reales y Desafíos Éticos</ListGroup.Item>
                                <ListGroup.Item className="bg-success text-light">Punto Clave 6: Tendencias Futuras en Inteligencia Artificial</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

            <Footer />
        </div>
    );
}

export default Curso3;
