<script>
    import {onMount} from "svelte";
    import { dev } from '$app/environment';
    import { Button, Icon, FormGroup, Label, Input, Modal, ModalBody, ModalFooter, ModalHeader, 
            Alert, Card, CardBody, CardHeader, CardText, CardTitle,  Row, Col, 
            Container, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from '@sveltestrap/sveltestrap';
    import { query_selector_all } from 'svelte/internal';
    import { Pagination, PaginationItem, PaginationLink } from '@sveltestrap/sveltestrap';

// Rutas
let API = '/api/v2/manofthematch';
if(dev)
    API = 'http://localhost:20000'+API;


// ===============================================
// Variables
// ===============================================

let listings = []; // Data
let showForm = false;
let showFilter = false;
let newListing ={
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
let selectedFilter ={
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

let error_msg = '';
let success_msg = '';
let success2_msg = '';

let size = "lg";
const toggle = () => {
    size = "lg";
    showFilter = !showFilter;
};

// Paginacion

let currentPage = 1;
//let totalItems = 0;
const pageSize = 10;
let totalItems = 0;
let pagination = 0;
let valor = -1;



function nextPage(){
    if(pagination!=valor){
        pagination++;
        getListings();
        window.scrollTo(0, 0);
    }
}
function prevPage(){
    if (pagination >= 1){
        pagination--;
        getListings();;
        window.scrollTo(0, 0);
    }
}



// Inicialización

onMount(async () => {
    await getListings();
    // Temporizador para ocultar automáticamente las alertas después de 5 segundos
    setTimeout(() => {
        error_msg = "";
        success_msg = "";
        success2_msg = "";
    }, 10000);
});

async function getListings() {
    let response = await fetch(`${API}?limit=${pageSize}&offset=${pagination*10}`, {
            method: "GET"
        });
    const status = await response.status;
    if (status == 200){
        let data = await response.json();
        listings = data;
        totalItems = data.length;
        success_msg = "Mostrando datos";
        error_msg = "";
        window.scrollTo(0, 0);
    } else if (status == 404) {
        error_msg = "No hay datos cargados en la base de datos o ya no hay más datos"
        success_msg = "";
        window.scrollTo(0, 0);
    } else if (status == 500) {
        error_msg = "Ha ocurrido un error en el servidor";
        success_msg = "";
        window.scrollTo(0, 0);
    }
};


async function getInitialListings(){
    let response = await fetch(API + "/loadInitialData", {
                method: "GET"
            });
    const status = await response.status;
    if (status == 201){
        getListings();
        success_msg = "Datos iniciales cargados correctamente";
        error_msg = "";
        window.scrollTo(0, 0);
    } else if (status == 200) {
        error_msg = "La base de datos ya está cargada";
        success_msg = "";
        window.scrollTo(0, 0);
    } else if (status == 500){
        error_msg = "Ha ocurrido un error en el servidor"
        success_msg = "";
        window.scrollTo(0, 0);
    }
};


async function searchListing() {
    const fromInput = document.getElementById('fromInput').value.trim();
    const toInput = document.getElementById('toInput').value.trim();

    // Convierte los valores de entrada a números enteros
    const from = parseInt(fromInput);
    const to = parseInt(toInput);

    // Verifica si los valores de entrada son números válidos
    if (isNaN(from) || isNaN(to)) {
        error_msg = "Por favor, introduzca años válidos en los campos From y To.";
        window.scrollTo(0, 0);
        return;
    }

    // Construye la URL de búsqueda con los años como parámetros
    let url = `${API}?from=${from}&to=${to}`;
    const response = await fetch(url, {
            method: 'GET'
        });
    const status = response.status;
    if (status == 200) {
            const data = await response.json();
            listings = data; 
            success_msg = "Se ha realizado la búsqueda correctamente";
            error_msg = '';
            window.scrollTo(0, 0);
    } else if (status == 404){
            error_msg = "No se encontraron resultados";
            success_msg = "";
            window.scrollTo(0, 0);
    } else if (status == 500){
            error_msg = "Ha ocurrido un error en el servidor";
            success_msg = "";
            window.scrollTo(0, 0);
    }
};

async function searchListings() {
    try {
        // Construye la URL de búsqueda a partir de los filtros proporcionados
        let searchParams = new URLSearchParams();
        if (Object.keys(selectedFilter).length === 0) {
            selectedFilter = {
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
        }
        for (const key in selectedFilter) {
            if (selectedFilter[key] !== '') {
                searchParams.append(key, selectedFilter[key]);
            }
        }
        let searchUrl = `${API}?${searchParams.toString()}`;
        console.log(searchUrl);
        // Realiza la petición GET a la API con la URL de búsqueda generada
        let response = await fetch(searchUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Manejo de la respuesta de la API
        let status = response.status;
        console.log(`Response status: ${status}`);

        if (response.status == 200) {
            // Actualiza los datos después de una búsqueda exitosa
            success_msg = "Mostrando los datos solicitados";
            let data = await response.json();
            listings = data;
            console.log(data);
        } else {
            // Manejo de errores
            if (response.status == 400) {
                error_msg = 'Error en la estructura de los datos';
            } else if (response.status == 404) {
                error_msg = 'No se encontraron datos';
            }
        }
    } catch (error) {
        error_msg = error;
        console.log(error);
    }
}


async function createListing(){
    if (!newListing.year || !newListing.date || !newListing.country || !newListing.Opponent || 
    !newListing.GoalScored || !newListing.BallPossession || !newListing.attemps ||
    !newListing.OnTarget || !newListing.OffTarget || !newListing.Blocked || !newListing.Corners) {
        error_msg = "Por favor, completa todos los campos.";
        success_msg = "";
        return;
    }
    let response = await fetch(API,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newListing)
        });
    const status = response.status;
    if (status == 201){
        success2_msg = "Se ha creado correctamente "+newListing.country;
        error_msg = "";
        showForm = false;
        await getListings();

    } else if (status == 400){
        error_msg = "Petición invalida. Revisa si has introducido todos los datos";
        success_msg = "";
    } else if (status == 405){
        error_msg = "Este método no está permitido";
        success_msg = "";
    } else if (status == 409){
        error_msg = "El dato introducido ya existe";
        success_msg = "";
    } else if (status == 500){
        error_msg = "Ha ocurrido un error en el servidor";
        success_msg = "";
    }
};

async function deleteAll(){
    let response = await fetch(API,{
            method: "DELETE"
        });
    const status = response.status;
    if (status == 200){
        success2_msg = "Todos los datos han sido eliminados";
        alert("Todos los datos han sido eliminados");
        error_msg = "";
        window.location.reload();
    } else if (status == 204) {
        error_msg = "No se encontraron datos para eliminar, es posible que la base de datos esté vacía";
        success_msg = "";
        window.scrollTo(0, 0);

    } else if (status == 500) {
        error_msg = "Ha ocurrido un error en el servidor";
        success_msg = "";
        window.scrollTo(0, 0);
    }
};

async function deleteListing(country){
    let response = await fetch(API + "/" + country ,{
            method: "DELETE"
        });
    const status = response.status;
    if (status == 200){
        success2_msg = "El recurso con pais "+country+ "ha sido eliminado";
        error_msg = "";
        getListings();
        window.scrollTo(0, 0);
    } else if (status == 204) {
        error_msg = "No se encontró ningún recurso con la pais y tp especificadas";
        success_msg = "";
        window.scrollTo(0, 0);
    } else if (status == 500) {
        error_msg = "Ha ocurrido un error en el servidor";
        success_msg = "";
        window.scrollTo(0, 0);
    }
};

</script>


<Container class="content-container" style="justify-content: center;"> 
    <!--______________________________________Cabecera_____________________________________-->
    <Container style="justify-content: center; text-align: center;">
            <h1> PARTIDOS MUNDIAL 2018 FIFA</h1>
    </Container>

    <br/>
<!--______________________________________Botones_____________________________________-->
<Container class="text-center">
    <Row>
        <Col cols={{ xs:4 }}>
            <Button color="warning" on:click="{getInitialListings}">Datos Iniciales</Button>
        </Col>
        <Col cols={{ xs:4 }}>
            <Button color="success" on:click={() => {showForm = true;}}>Nuevo Dato</Button>
        </Col>
        <Col cols={{ xs:4 }}>
            <Button color="danger" on:click="{deleteAll}">Borrar Datos</Button>
        </Col>
        <Col>
            <Button color="primary" on:click={() => {showFilter = true;}}>Filtrar</Button>
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
        <strong>OK:</strong> {success_msg}
    </Alert>
    
    {/if}
    {#if success2_msg != ""}
    <Alert color="success">
        <strong>OK:</strong> {success2_msg}
    </Alert>
    {/if}
<!-- Elementos de entrada para los parámetros de búsqueda -->
<Container style="justify-content: center; text-align: center;">
    <h2> Filtro por años</h2>
    <Row>
        <Col>
            <Input type="number" id="fromInput" placeholder="From"/>
        </Col>
        <Col>
            <Input type="number" id="toInput" placeholder="To"/>
        </Col>
        <Col>
            <Button color="primary" on:click={searchListing}>Buscar</Button>
        </Col>
    </Row>
</Container>

<br>
<hr>


{#if listings && listings.length > 0}
    <!--_______________________________________________Datos_________________________________________________-->
<Container>
        <!-- Bloque condicional if con modal -->
    
    {#if showFilter}
    <Modal isOpen={showFilter} {toggle} {size}>
        <ModalHeader {toggle}>Filtrar datos</ModalHeader>
        <ModalBody>
            
            <form on:submit|preventDefault={searchListings}>
                <Container fluid>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="year">Año</Label>
                                <Input type="number" id="year" bind:value={selectedFilter.year} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="date">Fecha</Label>
                                <Input type="text" id="date" bind:value={selectedFilter.date} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="country">Pais</Label>
                                <Input type="text" id="country" bind:value={selectedFilter.country} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="Opponent">Oponente</Label>
                                <Input type="text" id="Opponent" bind:value={selectedFilter.Opponent} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="GoalScored">Goles</Label>
                                <Input type="text" id="GoalScored" bind:value={selectedFilter.GoalScored} required />
                            </FormGroup>
                        </Col><Col>
                            <FormGroup>
                                <Label for="BallPossession">Posesion del pais</Label>
                                <Input type="text" id="BallPossession" bind:value={selectedFilter.BallPossession} required />
                            </FormGroup>
                        </Col><Col>
                            <FormGroup>
                                <Label for="attemps">Tiros</Label>
                                <Input type="text" id="attemps" bind:value={selectedFilter.attemps} required />
                            </FormGroup>
                        </Col><Col>
                            <FormGroup>
                                <Label for="OnTarget">Tiros a puerta</Label>
                                <Input type="text" id="OnTarget" bind:value={selectedFilter.OnTarget} required />
                            </FormGroup>
                        </Col><Col>
                            <FormGroup>
                                <Label for="OffTarget">Tiros fuera</Label>
                                <Input type="text" id="OffTarget" bind:value={selectedFilter.OffTarget} required />
                            </FormGroup>
                        </Col><Col>
                            <FormGroup>
                                <Label for="Blocked">Tiros bloqueados</Label>
                                <Input type="text" id="Blocked" bind:value={selectedFilter.Blocked} required />
                            </FormGroup>
                        </Col><Col>
                            <FormGroup>
                                <Label for="Corners">Corners</Label>
                                <Input type="text" id="Corners" bind:value={selectedFilter.Corners} required />
                            </FormGroup>
                        </Col>
                    </Row>
                </Container>
            </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" on:click={searchListings}>Aplicar filtros</Button>
          <Button color="secondary" on:click={toggle}>Cerrar</Button>
        </ModalFooter>
        <Container>
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
        </Container>
      </Modal>
    {/if}
    <!-- AQUI SE MUESTRAN LOS DATOS -->
    <Row cols={{ xs:2,sm: 3, md: 3, lg: 3, xl:4}}>
        {#each listings as listing}
            <Col class='mb-3'>
                <Card>
                    <CardHeader>
                        <CardTitle>{listing.country}</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            <strong>Año:</strong> {listing.year} <br>
                            <strong>Fecha:</strong> {listing.date} <br>
                            <strong>Pais:</strong> {listing.country} <br>
                            <strong>Oponente:</strong> {listing.Opponent} <br>
                            <strong>Goles:</strong> {listing.GoalScored} <br>
                            <strong>Posesion del pais:</strong> {listing.BallPossession} <br>
                            <strong>Tiros:</strong> {listing.attemps} <br>
                            <strong>Tiros a puerta:</strong> {listing.OnTarget} <br>
                            <strong>Tiros fuera:</strong> {listing.OffTarget} <br>
                            <strong>Tiros bloqueados:</strong> {listing.Blocked} <br>
                            <strong>Corners:</strong> {listing.Corners} <br>
                        </CardText>
                        <Button color="danger" on:click={() => deleteListing(listing.country)}>Borrar</Button>
                        <Button color="warning" on:click={() => { window.location.href = `trimestralpib_stats/${listing.year}/${listing.country}` }}>
                            Editar
                        </Button>
                    </CardBody>
                </Card>
            </Col>
        {/each}
    </Row>
</Container>


    {#if showForm}
    <Modal isOpen={showForm} {toggle} {size}>
        <ModalHeader {toggle}>Filtrar datos</ModalHeader>
        <ModalBody>
            
            <Container class='mb-3'>
                <Row cols={{ xs:2,sm: 2, md: 3, lg: 3, xl:3}}>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="year">Year</Label>
                            <Input
                                type="number"
                                id="year"
                                name="year"
                                placeholder="Año"
                                bind:value={newListing.year}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="date">Date</Label>
                            <Input
                                type="date"
                                id="date"
                                name="date"
                                placeholder="Fecha"
                                bind:value={newListing.date}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="country">Country</Label>
                            <Input
                                type="text"
                                id="country"
                                name="country"
                                placeholder="País"
                                bind:value={newListing.country}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="Opponent">Opponent</Label>
                            <Input
                                type="text"
                                id="Opponent"
                                name="Opponent"
                                placeholder="Oponente"
                                bind:value={newListing.Opponent}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="GoalScored">Goal Scored</Label>
                            <Input
                                type="text"
                                id="GoalScored"
                                name="GoalScored"
                                placeholder="Goles"
                                bind:value={newListing.GoalScored}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="BallPossession">Ball Possession</Label>
                            <Input
                                type="text"
                                id="BallPossession"
                                name="BallPossession"
                                placeholder="Posesión del pais"
                                bind:value={newListing.BallPossession}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="attempts">Attempts</Label>
                            <Input
                                type="text"
                                id="attempts"
                                name="attempts"
                                placeholder="Tiros"
                                bind:value={newListing.attempts}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="OnTarget">On Target</Label>
                            <Input
                                type="text"
                                id="OnTarget"
                                name="OnTarget"
                                placeholder="Tiros a puerta"
                                bind:value={newListing.OnTarget}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="OffTarget">Off Target</Label>
                            <Input
                                type="text"
                                id="OffTarget"
                                name="OffTarget"
                                placeholder="Tiros fuera"
                                bind:value={newListing.OffTarget}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="Blocked">Blocked</Label>
                            <Input
                                type="text"
                                id="Blocked"
                                name="Blocked"
                                placeholder="Tiros bloqueados"
                                bind:value={newListing.Blocked}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="Corners">Corners</Label>
                            <Input
                                type="text"
                                id="Corners"
                                name="Corners"
                                placeholder="Corners"
                                bind:value={newListing.Corners}
                                required
                            />
                        </FormGroup>
                    </Col>
                    
                </Row>
            </Container>
        </ModalBody>
        <ModalFooter>
            <Button color="success" on:click={createListing}>Crear</Button>
        </ModalFooter>
        <Container>
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
        </Container>
    </Modal>
    
    {/if}


{:else}
	<p class="container">No hay datos disponibles</p>
{/if}

<hr>
<br>
<!--______________________________________Paginación_____________________________________-->
<Container class="text-center">
    <Row>
        <Col cols={{ xs:6 }}>
            <Button color="info" on:click={prevPage}>Página anterior</Button>
        </Col>
        <Col cols={{ xs:6 }}>
            <Button color="info" on:click={nextPage}>Página siguiente</Button>
        </Col>
    </Row>
</Container>

<hr>
<br>





</Container>













