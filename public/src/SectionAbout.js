import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Stack from 'react-bootstrap/Stack';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
function SectionAbout() {
    return (  
        <div>
            <Container>
                <Row>
                    <Col md={4}>
                        <Row className="mb-2">
                            <div align="center">
                                <Image src={"img/stefano-di-pasquale.jpg"} thumbnail={true} fluid={true} roundedCircle={true} />
                            </div>
                        </Row>
                        <Row>
                            <Stack className="justify-content-center" direction="horizontal" gap={3}>
                                <Button variant="primary rounded-circle">Linkedin</Button>
                                <Button variant="primary rounded-circle">GitHub</Button>
                                <Button variant="primary rounded-circle">Twitter</Button>
                            </Stack>
                        </Row>
                    </Col>
                    <Col md={8}>
                        <h1>Ciao, sono Stefano.</h1>
                        <p>Sono un Full Stack Developer con esperienza, sempre pronto ad affacciarsi ed imparare nuove tecnologie. Fin da piccolo sono guidato dalla mia passione per l'informatica e per la tecnologia: a 8 anni ho studiato BASIC, a 12 Javascript. Ho lavorato in piccole e grandi realtà, ma anche in proprio.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}
export default SectionAbout;