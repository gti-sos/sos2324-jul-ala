<style>
    @import "/styles.css";
    @import url('https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300..900;1,300..900&display=swap');
</style>

<svelte:head>
    <title>SOS2324-17 Project</title>
</svelte:head>
<script>
    import { Container, Row, Col, Card, CardHeader, CardBody, CardTitle, CardSubtitle, CardText, Button} from '@sveltestrap/sveltestrap';
</script>

<div>
<Container class="content-container" style="justify-content: center;"> 
        <h1>SOS2324-17</h1>
        <img src="/favicon.png" alt="SOS" class="centered-image">
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
                                <li><a href="https://github.com/ahmfra">Ahmed Amine Fraj</a>economicfreedom-stats</li>
                                <li><a href="https://github.com/adrile15">Adrian Leon Arjona</a>trimestralpib-stats</li>
                                <li><a href="https://github.com/antrummor">Antonio Rumi Moreno</a>manofthematch</li>
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
                        <CardText><a href="https://github.com/gti-sos/SOS2324-17">gti-sos/SOS2324-17</a></CardText>
                    </CardBody>
                </Card>
            </Col>
            <Col sm="12" md="6">
                <Card>
                    <CardHeader>
                        <CardTitle>URL</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText><a href="https://sos2324-17.appspot.com">sos2324-17.appspot.com</a></CardText>
                    </CardBody>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col><br></Col>
        </Row>
        <Row>
            <Col>
                <Card>
                    <CardHeader>
                        <CardTitle>APIs</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div class="api-container">
                            <Row>
                                <Col sm="12" md="4">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="primary" href="https://sos2324-17.appspot.com/api/v1/trimestralpib_stats/">trimestralpib_stats [v1]</Button>
                                            <Button color="primary" href="https://sos2324-17.appspot.com/api/v2/trimestralpib_stats/">trimestralpib_stats [v2]</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/adrile15">Adrian León Arjona</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12" md="4">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="primary" href="https://sos2324-17.appspot.com/api/v1/manofthematch/" >manofthematch [v1]</Button>
                                            <Button color="primary" href="https://sos2324-17.appspot.com/api/v2/manofthematch/" >manofthematch [v2]</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/antrummor">Antonio Rumí Moreno</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12" md="4">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="primary" href="https://sos2324-17.appspot.com/api/v1/economicfreedom_stats/">economicfreedom_stats [v1]</Button>
                                            <Button color="primary" href="https://sos2324-17.appspot.com/api/v2/economicfreedom_stats/">economicfreedom_stats [v2]</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/ahmfra">Ahmed Amine Fraj</a></CardSubtitle>
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
            <Col>
                <Card>
                    <CardHeader>
                        <CardTitle>APIs documentation</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div class="api-container">
                            <Row>
                                <Col sm="12" md="4">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="info" href="https://sos2324-17.appspot.com/api/v1/trimestralpib_stats/docs">trimestralpib_stats [v1]</Button>
                                            <Button color="info" href="https://sos2324-17.appspot.com/api/v2/trimestralpib_stats/docs">trimestralpib_stats [v2]</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/adrile15">Adrian León Arjona</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12" md="4">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="info" href="https://sos2324-17.appspot.com/api/v1/manofthematch/docs" >manofthematch [v1]</Button>
                                            <Button color="info" href="https://sos2324-17.appspot.com/api/v2/manofthematch/docs" >manofthematch [v2]</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/antrummor">Antonio Rumí Moreno</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12" md="4">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="info" href="https://sos2324-17.appspot.com/api/v1/economicfreedom_stats/docs">economicfreedom-stats [v1]</Button>
                                            <Button color="info" href="https://sos2324-17.appspot.com/api/v2/economicfreedom_stats/docs">economicfreedom-stats [v2]</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/ahmfra">Ahmed Amine Fraj</a></CardSubtitle>
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
            <Col>
                <Card>
                    <CardHeader>
                        <CardTitle>Frontends</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div class="api-container">
                            <Row>
                                <Col sm="12" md="4">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="warning" href="https://sos2324-17.appspot.com/trimestralpib_stats/">trimestralpib_stats</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/adrile15">Adrian León Arjona</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12" md="4">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="warning" href="https://sos2324-17.appspot.com/manofthematch/" >manofthematch</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/antrummor">Antonio Rumí Moreno</a></CardSubtitle>
                                        </CardBody>
                                    </Card>
                                </Col>
                                <Col sm="12" md="4">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="warning" href="https://sos2324-17.appspot.com/economicfreedom_stats/">economicfreedom_stats</Button>
                                            <CardText><hr></CardText>
                                            <CardSubtitle>Developed by <a href="https://github.com/ahmfra">Ahmed Amine Fraj</a></CardSubtitle>
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
            <Col>
                <Card>
                    <CardHeader>
                        <CardTitle>Views</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <div class="api-container">
                            <Row>
                                <Col sm="12" md="4">
                                    <Card class="api-wrapper">
                                        <CardBody>
                                            <Button color="warning" href="https://sos2324-17.appspot.com/trimestralpib_stats/vistas">trimestralpib_stats</Button>
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