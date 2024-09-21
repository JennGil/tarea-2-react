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

function Curso5() {
    return (
        <div>
            <Navbar bg="primary" variant="dark" expand="lg">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="mt-5">
                <h2 className="text-center mb-4">Curso 5: Desarrollo de Aplicaciones Móviles</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Información del Curso</Accordion.Header>
                        <Accordion.Body>
                            <p className="mb-4">En este curso exploraremos los conceptos clave para el desarrollo de aplicaciones móviles, incluyendo herramientas, plataformas y mejores prácticas.</p>
                            <Table striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                        <th>Temas</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Introducción al Desarrollo Móvil</td>
                                        <td>Fundamentos del desarrollo de aplicaciones móviles y la evolución de las plataformas móviles.</td>
                                    </tr>
                                    <tr>
                                        <td>Plataformas y Herramientas</td>
                                        <td>Comparación entre Android y iOS, y herramientas de desarrollo como Android Studio y Xcode.</td>
                                    </tr>
                                    <tr>
                                        <td>Lenguajes de Programación</td>
                                        <td>Java y Kotlin para Android; Swift para iOS; y frameworks multiplataforma como React Native y Flutter.</td>
                                    </tr>
                                    <tr>
                                        <td>Diseño de Interfaz de Usuario</td>
                                        <td>Principios de diseño de UI/UX para aplicaciones móviles, incluyendo diseño responsivo y accesibilidad.</td>
                                    </tr>
                                    <tr>
                                        <td>Pruebas y Depuración</td>
                                        <td>Técnicas para probar y depurar aplicaciones móviles para asegurar su rendimiento y calidad.</td>
                                    </tr>
                                    <tr>
                                        <td>Publicación en Tiendas de Aplicaciones</td>
                                        <td>Procedimientos para la publicación de aplicaciones en Google Play Store y Apple App Store.</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-success text-light">Punto Clave 1: Fundamentos del Desarrollo Móvil y Plataformas</ListGroup.Item>
                                <ListGroup.Item className="bg-success text-light">Punto Clave 2: Lenguajes de Programación y Frameworks</ListGroup.Item>
                                <ListGroup.Item className="bg-success text-light">Punto Clave 3: Diseño de Interfaz de Usuario y Experiencia</ListGroup.Item>
                                <ListGroup.Item className="bg-success text-light">Punto Clave 4: Pruebas, Depuración y Calidad</ListGroup.Item>
                                <ListGroup.Item className="bg-success text-light">Punto Clave 5: Estrategias de Publicación y Marketing</ListGroup.Item>
                                <ListGroup.Item className="bg-success text-light">Punto Clave 6: Tendencias Emergentes en Desarrollo Móvil</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

            <Footer />
        </div>
    );
}

export default Curso5;
