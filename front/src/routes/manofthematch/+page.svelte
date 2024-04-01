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

let matchs = []; // Data
let showForm = false;
let showFilter = false;
let newMatch ={
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

async function getMatchs() {
    let response = await fetch(`${API}?limit=${pageSize}&offset=${pagination*10}`, {
            method: "GET"
        });
    const status = await response.status;
    if (status == 200){
        let data = await response.json();
        matchs = data;
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


async function getInitialMatchs(){
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


async function searchMatch() {
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

async function searchMatchs() {
    try {
        // Construye la URL de búsqueda a partir de los filtros proporcionados
        let searchParams = new URLSearchParams();
        if (Object.keys(selectedFilter).length === 0) {
            selectedFilter = {
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


async function createMatch(){
    if (!newMatch.date || !newMatch.country || !newMatch.Opponent || 
    !newMatch.GoalScored || !newMatch.BallPossession || !newMatch.attemps
    || !newMatch.OnTarget || !newMatch.OffTarget || !newMatch.Blocked || 
    !newMatch.Corners) {
        error_msg = "Por favor, completa todos los campos.";
        success_msg = "";
        return;
    }
    let response = await fetch(API,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newMatch)
        });
    const status = response.status;
    if (status == 201){
        success2_msg = "Se ha creado correctamente el nombre del país "+newMatch.country;
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

async function deleteMatch(lat,lon){
    let response = await fetch(API + "/" + lat + "/" + lon,{
            method: "DELETE"
        });
    const status = response.status;
    if (status == 200){
        success2_msg = "El recurso con latitud "+lat+" y longitud "+lon+" ha sido eliminado";
        error_msg = "";
        getListings();
        window.scrollTo(0, 0);
    } else if (status == 204) {
        error_msg = "No se encontró ningún recurso con la latitud y longitud especificadas";
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
            <h1> Datos de alquileres manejados por AirBnB</h1>
    </Container>

    <br/>
<!--______________________________________Botones_____________________________________-->
<Container class="text-center">
    <Row>
        <Col cols={{ xs:4 }}>
            <Button color="warning" on:click="{getInitialMatchs}">Cargar Datos Iniciales</Button>
        </Col>
        <Col cols={{ xs:4 }}>
            <Button color="success" on:click={() => {showForm = true;}}>Crear Nuevo Dato</Button>
        </Col>
        <Col cols={{ xs:4 }}>
            <Button color="danger" on:click="{deleteAll}">Borrar Todos los Datos</Button>
        </Col>
        <Col>
            <Button color="primary" on:click={() => {showFilter = true;}}>Filtro por campos</Button>
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
            <Button color="primary" on:click={searchMatch}>Buscar</Button>
        </Col>
    </Row>
</Container>

<br>
<hr>


{#if matchs && matchs.length > 0}
    <!--_______________________________________________Datos_________________________________________________-->
<Container>
        <!-- Bloque condicional if con modal -->
    
    {#if showFilter}
    <Modal isOpen={showFilter} {toggle} {size}>
        <ModalHeader {toggle}>Filtrar datos</ModalHeader>
        <ModalBody>
            
            <form on:submit|preventDefault={searchMatchs}>
                <Container fluid>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="country">PAIS</Label>
                                <Input type="text" id="country" bind:value={selectedFilter.country} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="date">FECHA</Label>
                                <Input type="text" id="date" bind:value={selectedFilter.date} required />
                            </FormGroup>
                        </Col>
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
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="BallPossession">Posesion</Label>
                                <Input type="text" id="BallPossession" bind:value={selectedFilter.BallPossession} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="attemps">tiros</Label>
                                <Input type="attemps" id="attemps" bind:value={selectedFilter.attemps} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="OnTarget">Tiros a puerta</Label>
                                <Input type="text" id="OnTarget" bind:value={selectedFilter.OnTarget} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="OffTarget">Tiros fuera</Label>
                                <Input type="text" id="OffTarget" bind:value={selectedFilter.OffTarget} required />
                            </FormGroup>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <FormGroup>
                                <Label for="Blocked">Tiros bloqueados</Label>
                                <Input type="text" id="Blocked" bind:value={selectedFilter.Blocked} required />
                            </FormGroup>
                        </Col>
                        <Col>
                            <FormGroup>
                                <Label for="Corners">Corners</Label>
                                <Input type="tex" id="Corners" bind:value={selectedFilter.Corners} required />
                            </FormGroup>
                        </Col>
                    </Row>
                </Container>
            </form>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" on:click={searchMatchs}>Aplicar filtros</Button>
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
        {#each matchs as match}
            <Col class='mb-3'>
                <Card>
                    <CardHeader>
                        <CardTitle>{match.country}</CardTitle>
                    </CardHeader>
                    <CardBody>
                        <CardText>
                            <strong>Fecha:</strong>{match.date} <br>
                            <strong>Pais:</strong> {match.country} <br>
                            <strong>Oponente:</strong> {match.Opponent} <br>
                            <strong>Goles:</strong> {match.GoalScored} <br>
                            <strong>Posesion:</strong> {match.BallPossession} <br>
                            <strong>Tiros:</strong> {match.attemps} <br>
                            <strong>Tiros a puerta:</strong> {match.OnTarget} <br>
                            <strong>Tiros fuera: </strong>{match.OffTarget} <br>
                            <strong>Tiros bloqueados:</strong> {match.Blocked} <br>
                            <strong>Corners:</strong> {match.Corners} <br>
                        </CardText>
                        <Button color="danger" on:click={() => deleteMatch(match.country, match.Opponent)}>Borrar</Button>
                        <Button color="warning" on:click={() => { window.location.href = `manofthematch/${match.country}/${match.Opponent}` }}>
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
                            <Label for="date">Fecha</Label>
                            <Input
                                type="text"
                                id="date"
                                name="date"
                                placeholder="Escribe una fecha"
                                bind:value={newMatch.date}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="country">Pais</Label>
                            <Input
                                type="text"
                                id="country"
                                name="country"
                                placeholder="Escribe un pais"
                                bind:value={newMatch.country}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="Opponent">Oponente</Label>
                            <Input
                                type="text"
                                id="Opponent"
                                name="Opponent"
                                placeholder="Escribe un oponente"
                                bind:value={newMatch.Opponent}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="BallPossession">Posesion</Label>
                            <Input
                                type="text"
                                id="BallPossession"
                                name="BallPossession"
                                placeholder="Escribe un numero de posesion"
                                bind:value={newMatch.BallPossession}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="attemps">Tiros</Label>
                            <Input
                                type="text"
                                id="attemps"
                                name="attemps"
                                placeholder="Escribe un numero de tiros"
                                bind:value={newMatch.attemps}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="OnTarget">Tiros a puerta</Label>
                            <Input
                                type="text"
                                id="OnTarget"
                                name="OnTarget"
                                placeholder="Escribe un numero de tiros a puerta"
                                bind:value={newMatch.OnTarget}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="OffTarget">Tiros fuera</Label>
                            <Input
                                type="text"
                                id="OffTarget"
                                name="OffTarget"
                                placeholder="Escribe un numero de tiros que hayan ido fuera"
                                bind:value={newMatch.OffTarget}
                                required
                            />
                        </FormGroup>
                    </Col>
                    <Col class='mb-3'>
                        <FormGroup>
                            <Label for="Blocked">Tiros bloqueados</Label>
                            <Input
                                type="text"
                                id="Blocked"
                                name="Blocked"
                                placeholder="Escribe un numero de tiros bloqueados"
                                bind:value={newMatch.Blocked}
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
                                placeholder="Escribe un numero de corners"
                                bind:value={newMatch.Corners}
                                required
                            />
                        </FormGroup>
                    </Col>
                </Row>
            </Container>
        </ModalBody>
        <ModalFooter>
            <Button color="success" on:click={createMatch}>Crear</Button>
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