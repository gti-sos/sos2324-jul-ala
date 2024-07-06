<style>
    @import "/styles.css";
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
</style>

<svelte:head>
    <title>SOS2324-jul-ala Project</title>
</svelte:head>
<script>
    import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, Button} from '@sveltestrap/sveltestrap';
</script>

<div>
<Container class="content-container" style="justify-content: center;"> 
        <h1>SOS2324-jul-ala</h1>
        <hr>
        <Row>
        
            <Col sm="12" md="6">
                <Card>
                    <CardHeader>
                        <CardTitle>Team</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardSubtitle>
                            <ul>
                                <li><a href="https://github.com/adrile15">Adrian Leon Arjona </a> trimestralpib-stats</li>
                            </ul>
                        </CardSubtitle>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader>
                        <CardTitle>Project description</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>Our work consists on comparing the GDB (Gross Domestic Product) of each country with the economical freedom of its citizens.</CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col><br></Col>
        </Row>
        <Row>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader>
                        <CardTitle>Repository</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText><a href="https://github.com/gti-sos/sos2324-jul-ala">gti-sos/sos2324-jul-ala</a></CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader>
                        <CardTitle>URL</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText><a href="https://sos2324-jul-ala.ew.r.appspot.com/">sos2324-jul-ala.ew.r.appspot.com</a></CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col><br></Col>
        </Row>
        <!-- Recuadros de APIs -->
        <Row>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardHeader>
                        <CardTitle>APIs</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div class="api-container">
                            <Row>
                                <Col sm="12" md="12">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="primary" href="https://sos2324-jul-ala.ew.r.appspot.com/api/v1/trimestralpib_stats">trimestralpib_stats [v1]</Button>
                                            <Button color="primary" href="https://sos2324-jul-ala.ew.r.appspot.com/api/v2/trimestralpib_stats">trimestralpib_stats [v2]</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/adrile15">Adrian León Arjona</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardHeader>
                        <CardTitle>APIs documentation</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div class="api-container">
                            <Row>
                                <Col sm="12" md="12">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="primary" href="https://sos2324-jul-ala.ew.r.appspot.com/api/v1/trimestralpib_stats/docs">trimestralpib_stats [v1]</Button>
                                            <Button color="primary" href="https://sos2324-jul-ala.ew.r.appspot.com/api/v2/trimestralpib_stats/docs">trimestralpib_stats [v2]</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/adrile15">Adrian León Arjona</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardHeader>
                        <CardTitle>Frontends</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div class="api-container">
                            <Row>
                                <Col sm="12" md="12">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="primary" href="https://sos2324-jul-ala.ew.r.appspot.com/trimestralpib_stats">trimestralpib_stats</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/adrile15">Adrian León Arjona</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardHeader>
                        <CardTitle>Views</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div class="api-container">
                            <Row>
                                <Col sm="12" md="12">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="primary" href="https://sos2324-jul-ala.ew.r.appspot.com/trimestralpib_stats/views">trimestralpib_stats</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/adrile15">Adrian León Arjona</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardHeader>
                        <CardTitle>Integrations</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div class="api-container">
                            <Row>
                                <Col sm="12" md="12">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="primary" href="https://sos2324-jul-ala.ew.r.appspot.com/integrations/trimestralpib_stats">integrations trimestralpib_stats</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/adrile15">Adrian León Arjona</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6" lg="4">
                <Card>
                    <CardHeader>
                        <CardTitle>Videos</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div class="api-container">
                            <Row>
                                <Col sm="12" md="12">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="primary" href="https://www.youtube.com/watch?v=oB7QyrNieAA">Video trimestralpib_stats</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/adrile15">Adrian León Arjona</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                            </Row>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        </Row>
</Container>
</div>
