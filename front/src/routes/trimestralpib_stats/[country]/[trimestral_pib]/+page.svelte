<script>
    import {onMount} from "svelte";
    import { dev } from '$app/environment';
    import { Button, Icon, FormGroup, Label, Table, Input, Modal, ModalBody, ModalFooter, ModalHeader, 
            Alert, Card, CardBody, CardHeader, CardText, CardTitle,  Row, Col, 
            Container, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from '@sveltestrap/sveltestrap';
    import { query_selector_all } from 'svelte/internal';
    import { Pagination, PaginationItem, PaginationLink } from '@sveltestrap/sveltestrap';
    import { page } from '$app/stores'; 
    import {faTrash, faPencil, faSpinner, faPlus, faHouse, faFilter, faMagnifyingGlass, faCheck, faXmark, faArrowLeft, faArrowRight, faLongArrowLeft} from '@fortawesome/free-solid-svg-icons';
    import Fa from 'svelte-fa';


    // Rutas
    let API = '/api/v2/trimestralpib_stats';
    if(dev)
        API = 'http://localhost:20000'+API;
    
    let success_msg = "";
    let success2_msg = "";
    let error_msg = "";
    let dato = {};
    let country = $page.params.country;
    let trimestral_pib = $page.params.trimestral_pib;

    let updatedListing ={
        country: "",
        date: "",
        trimestral_pib: "",
        trimestral_variable_pib: "",
        annual_variable_pib: ""
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
        const response = await fetch(API+`/${country}`,{
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
    if( updatedListing.country === "" || 
        updatedListing.date === "" || 
        updatedListing.trimestral_pib === "" || 
        updatedListing.trimestral_variable_pib === "" || 
        updatedListing.annual_variable_pib === ""  
        ) {
            error_msg = "No se puede actualizar si el dato no se pasa completo";
            window.scrollTo(0, 0);
        } else {
            const response = await fetch(API+`/${country}`, {
                method: 'PUT',
                headers:{
                    "Content-Type" : "application/json"
                },
                body: JSON.stringify(updatedListing)
            });
            const status = await response.status;
            if (status == 200){
                getResource();
                success2_msg = "El dato con pais "+country+" se ha actualizado correctamente. A continuación, serás redirigido al listado de recursos";
                error_msg = "";
                window.scrollTo(0, 0);
            } else if (status == 404){
                error_msg = "El dato con pais "+country+" no existe en la base de datos";
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
                        <CardBody>
                            <CardText>
                                <Row>
                                    <Col class='mb-3'>
                                        <strong>Pais: </strong>{updatedListing.country}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Fecha de registro: </strong>{updatedListing.date}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Pib trimestral: </strong>{updatedListing.trimestral_pib}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Pib trimestral variable: </strong>{updatedListing.trimestral_variable_pib}
                                    </Col>
                                    <Col class='mb-3'>
                                        <strong>Pib anual variable: </strong>{updatedListing.annual_variable_pib}
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
            <Row class="text-center">
                <Button color="success" on:click={() => { window.location.href = `/trimestralpib_stats/`}}><Fa icon={faLongArrowLeft}/> Volver</Button>
            </Row>
            <br>
            <hr>
            <Row cols={{ xs:2,sm: 2, md: 3, lg: 3, xl:3}}>
                            <Col class='mb-3'>
                            <FormGroup>
                                <Label for="nombre">Pais</Label>
                                <Input id="nombre" bind:value={updatedListing.country} placeholder="Nuevo pais"/>
                            </FormGroup>
                            </Col>
                            <Col class='mb-3'>
                            <FormGroup>
                                <Label for="fechaRegistro">Fecha de registro</Label>
                                <Input type="text" id="fechaRegistro" bind:value={updatedListing.date} placeholder="Nueva fecha de registro"/>
                            </FormGroup>
                            </Col>
                            <Col class='mb-3'>
                            <FormGroup>
                                <Label for="pibTrimestral">Pib trimestral</Label>
                                <Input id="pibTrimestral" bind:value={updatedListing.trimestral_pib} placeholder="Nuevo pib trimestral"/>
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="pibTrimestralVariable">Pib trimestral variable</Label>
                                <Input id="pibTrimestralVariable" bind:value={updatedListing.trimestral_variable_pib} placeholder="Nuevo pib trimestral variable"/>
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="annualVariablePib">Pib anual variable</Label>
                                <Input id="annualVariablePib" bind:value={updatedListing.annual_variable_pib} placeholder="Nuevo pib anual variable"/>
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
