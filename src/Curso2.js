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

function Curso2() {
    return (
        <div>
            <Navbar bg="info" variant="dark" expand="lg">
                <Navbar.Brand href="/">Inicio</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">Cursos</Nav.Link>
                </Nav>
            </Navbar>

            <Container className="mt-5">
                <h2 className="text-center mb-4">Curso 2: Data Science</h2>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Información del Curso</Accordion.Header>
                        <Accordion.Body>
                            <p className="mb-4">Este curso ofrece una visión integral del campo de Data Science, abordando desde la recopilación de datos hasta el análisis y visualización.</p>
                            <Table striped bordered hover variant="light">
                                <thead>
                                    <tr>
                                        <th>Temas</th>
                                        <th>Detalles</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Introducción a Data Science</td>
                                        <td>Comprender el papel de un Data Scientist y el flujo de trabajo en proyectos de ciencia de datos.</td>
                                    </tr>
                                    <tr>
                                        <td>Recopilación y Limpieza de Datos</td>
                                        <td>Técnicas para adquirir datos de diversas fuentes y procesos de limpieza para asegurar calidad.</td>
                                    </tr>
                                    <tr>
                                        <td>Análisis Exploratorio de Datos (EDA)</td>
                                        <td>Uso de técnicas estadísticas y visualización para descubrir patrones y anomalías en los datos.</td>
                                    </tr>
                                    <tr>
                                        <td>Modelado y Machine Learning</td>
                                        <td>Aplicación de algoritmos de machine learning para hacer predicciones y clasificaciones basadas en los datos.</td>
                                    </tr>
                                    <tr>
                                        <td>Visualización de Datos</td>
                                        <td>Creación de gráficos y dashboards para comunicar resultados y hallazgos de manera efectiva.</td>
                                    </tr>
                                </tbody>
                            </Table>
                            <ListGroup variant="flush">
                                <ListGroup.Item className="bg-info text-light">Punto Clave 1: Fundamentos de Data Science</ListGroup.Item>
                                <ListGroup.Item className="bg-info text-light">Punto Clave 2: Herramientas y Tecnologías Comunes (Python, R, SQL)</ListGroup.Item>
                                <ListGroup.Item className="bg-info text-light">Punto Clave 3: Métodos de Análisis y Modelado Predictivo</ListGroup.Item>
                                <ListGroup.Item className="bg-info text-light">Punto Clave 4: Evaluación de Modelos y Validación Cruzada</ListGroup.Item>
                                <ListGroup.Item className="bg-info text-light">Punto Clave 5: Técnicas Avanzadas y Big Data</ListGroup.Item>
                                <ListGroup.Item className="bg-info text-light">Punto Clave 6: Aplicaciones y Casos de Estudio en la Industria</ListGroup.Item>
                            </ListGroup>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>

            <Footer />
        </div>
    );
}

export default Curso2;
