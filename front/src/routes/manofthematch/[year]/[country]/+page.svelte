<script>
    import {onMount} from "svelte";
    import { dev } from '$app/environment';
    import { Button, Icon, FormGroup, Label, Table, Input, Modal, ModalBody, ModalFooter, ModalHeader, 
            Alert, Card, CardBody, CardHeader, CardText, CardTitle,  Row, Col, 
            Container, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from '@sveltestrap/sveltestrap';
    import { page } from '$app/stores'; 
    import {faHouse, faCheck, faLongArrowLeft} from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa';


    // Rutas
    let API = '/api/v2/manofthematch';
    if(dev)
        API = 'http://localhost:20000'+API;
    
    let success_msg = "";
    let success2_msg = "";
    let error_msg = "";
    let dato = {};
    let year = $page.params.year;
    let country = $page.params.country;

    let updatedListing ={
        year: "",
        date: "",
        country: "",
        Opponent: "",
        GoalScored: "",
        BallPossession: "",
        attemps: "",
        OnTarget: "",
        OffTarget: "",
        Blocked: "",
        Corners: ""
    };


    onMount(async () => {
            getResource();
            // Temporizador para ocultar automáticamente las alertas después de 5 segundos
            setTimeout(() => {
                error_msg = "";
                success_msg = "";
                success2_msg = "";
            }, 10000);
                });

    async function getResource(){
        const response = await fetch(API+`/${year}/${country}`,{
                                        method: "GET"               
            }); 
        try{    
            const data = await response.json();
            updatedListing = {...data};
        }catch(error){
            console.log(`Error parsing result: ${error}`);
        }
        const status = await response.status;
        if (status == 404){
            error_msg = "No existe el dato solicitado";
            success_msg = "";
            window.scrollTo(0, 0);
        } else if (status == 200){
            success_msg = "Este es el dato solicitado";
            error_msg = "";
            window.scrollTo(0, 0);
        } else if (status == 500){
            error_msg = "Ha ocurrido un error en el servidor";
            success_msg = "";
            window.scrollTo(0, 0);
        }
    };

    async function updateResource(){
    if(     updatedListing.year === "" ||
            updatedListing.date === "" || 
            updatedListing.country === "" || 
            updatedListing.Opponent === "" || 
            updatedListing.GoalScored === "" || 
            updatedListing.BallPossession === "" || 
            updatedListing.attemps === "" || 
            updatedListing.OnTarget === "" ||
            updatedListing.OffTarget === "" ||
            updatedListing.Blocked === "" ||
            updatedListing.Corners === ""  ) {

            error_msg = "No se puede actualizar si el dato no se pasa completo";
            window.scrollTo(0, 0);
        } else {
            const response = await fetch(API+`/${year}/${country}`, {
                method: 'PUT',
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(updatedListing)
            });
            const status = await response.status;
            if (status == 200){
                getResource();
                success2_msg = "El dato con pais "+country+" y año "+year+" se ha actualizado correctamente";
                error_msg = "";
                window.scrollTo(0, 0);
            } else if (status == 404){
                error_msg = "El dato con pais "+country+" y año "+year+" no existe en la base de datos";
                success_msg = "";
                window.scrollTo(0, 0);
            } else if (status == 400){
                error_msg = "Hay algún dato que no se ha obtenido correctamente, vuelva a intentarlo";
                success_msg = "";
                window.scrollTo(0, 0);
            }
        }
    };
</script>
<main>
    <Container class="content-container" style="justify-content: center;"> 
        <!--______________________________________Cabecera_____________________________________-->
        <Container style="justify-content: center; text-align: center;">
                <h1> Datos del recurso</h1>
        </Container>
        <Container fluid>
            <Row>
                <Col>
                    <Card>
                        <CardHeader style="background-color: #008080; color: white; text-decoration-style: solid; justify-content: center; text-align: center;">
                            <CardTitle><Fa icon={faHouse}/> {updatedListing.country}</CardTitle>
                        </CardHeader>
                        <CardBody class='tarjetas-datos-edit'>
                            <CardText>
                                <Row>
                                    <Col class='mb-3'>
                                        <strong>Año: </strong>{updatedListing.year}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Fecha: </strong>{updatedListing.date}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Pais: </strong>{updatedListing.country}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Oponente: </strong>{updatedListing.Opponent}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Goles: </strong>{updatedListing.GoalScored}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Posesion del pais: </strong>{updatedListing.BallPossession}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Tiros: </strong>{updatedListing.attemps}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Tiros a puerta: </strong>{updatedListing.OnTarget}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Tiros fuera: </strong>{updatedListing.OffTarget}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Tiros bloqueados: </strong>{updatedListing.Blocked}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Corners: </strong>{updatedListing.Corners}
                                    </Col>
                                </Row>
                            </CardText>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
        </Container>
    
        <br/>

        {#if error_msg != ""}
        <Alert color="danger">
            <strong>Error:</strong> {error_msg}
        </Alert>
        {:else if success_msg != ""}
        <Alert color="success">
            <strong>Éxito:</strong> {success_msg}
        </Alert>
        
        {/if}
        {#if success2_msg != ""}
        <Alert color="success">
            <strong>Éxito:</strong> {success2_msg}
        </Alert>
        {/if}
    
    <Container class="mb-3">
        <Row>
            <Col class="text-center" id="editar">
                <h1>
                    Editar recurso
                </h1>
            </Col>
            <br>
            <hr>
            <Row class="text-center">
                <Button color="primary" on:click={() => { window.location.href = `/manofthematch/`}}><Fa icon={faLongArrowLeft}/> Volver</Button>
            </Row>
            <br>
            <hr>
            <Row cols={{ xs:2,sm: 2, md: 3, lg: 3, xl:3}}>
                            <Col class='mb-3'>
                            <FormGroup>
                                <Label for="year">Año</Label>
                                <Input type="number" id="year" invalid={!updatedListing.year} bind:value={updatedListing.year} placeholder="Nuevo Año"/>
                            </FormGroup>
                            </Col>
                            <Col class='mb-3'>
                            <FormGroup>
                                <Label for="date">Fecha</Label>
                                <Input type="text" id="date" invalid={!updatedListing.date} bind:value={updatedListing.date} placeholder="Nueva fecha"/>
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="country">Pais</Label>
                                <Input type="text" id="country" invalid={!updatedListing.country} bind:value={updatedListing.country} placeholder="Nuevo pais"/>
                            </FormGroup>
                            </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="Opponent">Oponente</Label>
                                <Input type="text" id="Opponent" invalid={!updatedListing.Opponent} bind:value={updatedListing.Opponent} placeholder="Nuevo oponente"/>
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="GoalScored">Goles</Label>
                                <Input type="text" id="GoalScored" invalid={!updatedListing.GoalScored} bind:value={updatedListing.GoalScored} placeholder="Nuevos goles" step="0.01"/>
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="BallPossession">Posesion del pais</Label>
                                <Input type="text" id="BallPossession" invalid={!updatedListing.BallPossession} bind:value={updatedListing.BallPossession} placeholder="Nuevo posesion"/>
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="attemps">Tiros</Label>
                                <Input type="text" id="attemps" invalid={!updatedListing.attemps} bind:value={updatedListing.attemps} placeholder="Nuevos tiros"/>
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="OnTarget">Tiros a puerta</Label>
                                <Input type="text" id="OnTarget" invalid={!updatedListing.OnTarget} bind:value={updatedListing.OnTarget} placeholder="Nuevos tiros a puerta"/>
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="OffTarget">Tiros fuera</Label>
                                <Input type="text" id="OffTarget" invalid={!updatedListing.OffTarget} bind:value={updatedListing.OffTarget} placeholder="Nuevos tiros fuera"/>
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="Blocked">Tiros bloqueados</Label>
                                <Input type="text" id="Blocked" invalid={!updatedListing.Blocked} bind:value={updatedListing.Blocked} placeholder="Nuevos tiros bloqueados"/>
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="Corners">Corners</Label>
                                <Input type="text" id="Corners" invalid={!updatedListing.Corners} bind:value={updatedListing.Corners} placeholder="Nuevos corners"/>
                            </FormGroup>
                        </Col>
                    </Row>
                    <Col class="text-center">
                        <Button color="primary" on:click={updateResource}><Fa icon={faCheck}/> Actualizar</Button>
                    </Col>
        </Row>
    </Container>
    </Container>
</main>