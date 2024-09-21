import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css'; // Importar Bootstrap aquí
import reportWebVitals from './reportWebVitals';
import { Carousel, Card, Container, Navbar, Nav } from 'react-bootstrap';

// Componente Footer
function Footer() {
    return (
        <footer className="bg-dark text-light text-center py-3 mt-4">
            <Container>
                <p>Desarrollado por Jennifer Martin</p>
            </Container>
        </footer>
    );
}

function Index() {
    return (
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="/">INICIO</Navbar.Brand>
                <Nav className="mr-auto">
                    <Nav.Link href="/cursos">CURSOS</Nav.Link>
                </Nav>
            </Navbar>

            <Carousel>
                {/* Primer elemento del carrusel */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/R.5075c2bb1003f49de2652237c6d331c4?rik=cbNTbP6C02nbYQ&pid=ImgRaw&r=0"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3 className="bg-dark text-light p-2 rounded">Bienvenido a nuestro sitio web</h3>
                        <p className="bg-dark text-light p-2 rounded">Explora nuestros cursos finalizados.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Segundo elemento del carrusel */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://images6.alphacoders.com/648/thumb-1920-648552.jpg"
                        alt="Second slide"
                    />
                    <Carousel.Caption>
                        <h3 className="bg-dark text-light p-2 rounded">Descubre nuestros cursos de ingeniería en sistemas</h3>
                        <p className="bg-dark text-light p-2 rounded">Profundiza en el mundo de la programación avanzada.</p>
                    </Carousel.Caption>
                </Carousel.Item>

                {/* Tercer elemento del carrusel */}
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="https://th.bing.com/th/id/R.e96bfb3c370ce5ecc94ac95262b2d037?rik=A3LSvI26iV0KQA&pid=ImgRaw&r=0"
                        alt="Third slide"
                    />
                    <Carousel.Caption>
                        <h3 className="bg-dark text-light p-2 rounded">Aprende con nosotros</h3>
                        <p className="bg-dark text-light p-2 rounded">Conoce nuestras opciones de aprendizaje y certificación.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>

            <Container className="mt-5">
                <h2 className="text-center mb-4">Cursos Disponibles</h2>
                <div className="d-flex flex-wrap justify-content-center">
                    <Card style={{ width: '18rem' }} className="m-3 shadow-sm border-primary">
                        <Card.Body>
                            <Card.Title>CURSO 1: 
                                Desarrollo Web</Card.Title>
                            <Card.Text>
                            Aprende a crear aplicaciones web modernas utilizando las últimas tecnologías y frameworks.
                            </Card.Text>
                            <Card.Link href="/curso1">Más información</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className="m-3 shadow-sm border-primary">
                        <Card.Body>
                            <Card.Title>CURSO  2: Data Science</Card.Title>
                            <Card.Text>
                            Domina el análisis de datos y aprende a utilizar herramientas como Python y R para tomar decisiones basadas en datos.
                            </Card.Text>
                            <Card.Link href="/curso2">Más información</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className="m-3 shadow-sm border-primary">
                        <Card.Body>
                            <Card.Title>CURSO 3: Inteligencia Artificial</Card.Title>
                            <Card.Text>
                            Explora el mundo de la inteligencia artificial y aprende a desarrollar modelos predictivos y sistemas inteligentes.                            </Card.Text>
                            <Card.Link href="/curso3">Más información</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className="m-3 shadow-sm border-primary">
                        <Card.Body>
                            <Card.Title>CURSO 4: Ciberseguridad</Card.Title>
                            <Card.Text>
                            Aprende técnicas avanzadas para proteger sistemas y redes contra amenazas y ataques cibernéticos.                            </Card.Text>
                            <Card.Link href="/curso4">Más información</Card.Link>
                        </Card.Body>
                    </Card>

                    <Card style={{ width: '18rem' }} className="m-3 shadow-sm border-primary">
                        <Card.Body>
                            <Card.Title>CURSO 5: Desarrollo de Aplicaciones Móviles</Card.Title>
                            <Card.Text>
                            Crea aplicaciones móviles para iOS y Android desde cero utilizando herramientas y técnicas modernas.                            </Card.Text>
                            <Card.Link href="/curso5">Más información</Card.Link>
                        </Card.Body>
                    </Card>
                </div>
            </Container>

            <Footer />
        </div>
    );
}

export default Index;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
