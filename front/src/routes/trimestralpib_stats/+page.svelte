<script>
    import {onMount} from "svelte";
    import { dev } from '$app/environment';
    import { Button, Icon, FormGroup, Label, Input, Modal, ModalBody, ModalFooter, ModalHeader, Alert, Card, CardBody, CardHeader, CardText, CardTitle,  Row, Col, 
                Container, ButtonDropdown, DropdownMenu, DropdownItem, DropdownToggle} from '@sveltestrap/sveltestrap';
    import { query_selector_all } from 'svelte/internal';
    import { Pagination, PaginationItem, PaginationLink } from '@sveltestrap/sveltestrap';
    
    // Rutas
    
    let API = '/api/v2/trimestralpib_stats';
    if(dev)
        API = 'http://localhost:20000'+API;
    
    
    // ===============================================
    // Variables
    // ===============================================
    
    let listings = []; // Data
    let showForm = false;
    let showFilter = false;
    let newListing ={
        country: "",
        year: "",
        date: "",
        trimestral_pib:"",
        trimestral_variable_pib: "",
        annual_variable_pib: ""
    };
    let selectedFilter ={
        country: "",
        year: "",
        date: "",
        trimestral_pib:"",
        trimestral_variable_pib: "",
        annual_variable_pib: ""
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
        try {
            // Construye la URL de búsqueda con los parámetros de paginación
            let url = `${API}?limit=${pageSize}&offset=${pagination * pageSize}`;
    
            // Realiza la búsqueda utilizando los parámetros 'from' y 'to', si están definidos
            if (selectedFilter.from && selectedFilter.to) {
                url += `&from=${selectedFilter.from}&to=${selectedFilter.to}`;
            }
    
            // Realiza la petición GET a la API con la URL de búsqueda generada
            let response = await fetch(url, {
                method: "GET"
            });
    
            // Verifica el estado de la respuesta
            const status = response.status;
    
            if (status === 200) {
                // Obtiene los datos de la respuesta
                const data = await response.json();
                listings = data;
                totalItems = data.length;
                success_msg = "Mostrando datos";
                error_msg = "";
                window.scrollTo(0, 0);
            } else if (status === 404) {
                error_msg = "No se encontraron datos disponibles";
                success_msg = "";
                window.scrollTo(0, 0);
            } else if (status === 500) {
                error_msg = "Ha ocurrido un error en el servidor";
                success_msg = "";
                window.scrollTo(0, 0);
            }
        } catch (error) {
            error_msg = "Ha ocurrido un error al procesar la solicitud";
            success_msg = "";
            console.error(error);
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
        for (const key in selectedFilter) {
            if (selectedFilter[key] !== '') {
                searchParams.append(key, selectedFilter[key]);
            }
        }
        let searchUrl = `${API}?${searchParams.toString()}`;
        
        // Realiza la petición GET a la API con la URL de búsqueda generada
        let response = await fetch(searchUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        // Obtiene el estado de la respuesta
        let status = response.status;

        if (status === 200) {
            // Si la respuesta es 200, significa que se encontraron datos
            let data = await response.json();
            listings = data;
            success_msg = "Mostrando los datos solicitados";
            error_msg = "";
        } else if (status === 404) {
            // Si la respuesta es 404, significa que no se encontraron datos
            listings = [];
            success_msg = "";
            error_msg = "No se encontraron datos";
        } else {
            // Si la respuesta es diferente de 200 y 404, muestra un mensaje de error genérico
            listings = [];
            success_msg = "";
            error_msg = "Ha ocurrido un error al procesar la solicitud";
        }
    } catch (error) {
        // Si se produce un error en la solicitud, muestra un mensaje de error
        console.error(error);
        listings = [];
        success_msg = "";
        error_msg = "Ha ocurrido un error al procesar la solicitud";
    }
}


    async function createListing(){
        if (!newListing.country || !newListing.year || !newListing.date || 
        !newListing.trimestral_pib || !newListing.trimestral_variable_pib || !newListing.annual_variable_pib ) {
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
            success_msg = "Se ha creado correctamente pais "+newListing.country;
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
        let response = await fetch(API + "/" + country,{
                method: "DELETE"
            });
        const status = response.status;
        if (status == 200){
            success2_msg = "El recurso con pais "+country+" ha sido eliminado";
            error_msg = "";
            getListings();
            window.scrollTo(0, 0);
        } else if (status == 204) {
            error_msg = "No se encontró ningún recurso con el pais especificado";
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
                <h1> Datos sobre PIB mundial</h1>
        </Container>
    
        <br/>
    <!--______________________________________Botones_____________________________________-->
    <Container class="text-center">
        <Row>
            <Col cols={{ xs:4 }}>
                <Button color="warning" on:click="{getInitialListings}">Cargar Datos Iniciales</Button>
            </Col>
            <Col cols={{ xs:4 }}>
                <Button color="success" on:click={() => {showForm = true;}}>Crear Nuevo Dato</Button>
            </Col>
            <Col cols={{ xs:4 }}>
                <Button color="danger" id = "deleteAllButton" on:click="{deleteAll}">Borrar Todos los Datos</Button>
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
                <Input type="number" id="fromInput" placeholder="Desde"/>
            </Col>
            <Col>
                <Input type="number" id="toInput" placeholder="Hasta"/>
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
                                    <Label for="country">Country</Label>
                                    <Input type="text" id="country" bind:value={selectedFilter.country} required />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="year">Año</Label>
                                    <Input type="number" id="year" bind:value={selectedFilter.year} required />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="date">Date</Label>
                                    <Input type="date" id="date" bind:value={selectedFilter.date} required />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="trimestral_pib">Pib trimestral</Label>
                                    <Input type="text" id="trimestral_pib" bind:value={selectedFilter.trimestral_pib} required />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="trimestral_variable_pib">Pib trimestral variable</Label>
                                    <Input type="text" id="trimestral_variable_pib" bind:value={selectedFilter.trimestral_variable_pib} required />
                                </FormGroup>
                            </Col>
                            <Col>
                                <FormGroup>
                                    <Label for="annual_variable_pib">Pib anual variable</Label>
                                    <Input type="text" id="annual_variable_pib" bind:value={selectedFilter.annual_variable_pib} required />
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
                    <Card class="tarjeta">
                        <CardHeader>
                            <CardTitle>{listing.country}</CardTitle>
                        </CardHeader>
                        <CardBody class='tarjetas-datos'>
                            <CardText>
                                <strong>Country:</strong> {listing.country} <br>
                                <strong>Year:</strong> {listing.year} <br>
                                <strong>Date:</strong> {listing.date} <br>
                                <strong>Pib trimestral:</strong> {listing.trimestral_pib} <br>
                                <strong>Pib trimestral variable:</strong> {listing.trimestral_variable_pib} <br>
                                <strong>Pib anual variable:</strong> {listing.annual_variable_pib} <br>
                            </CardText>
                            <Button color="danger" id ="deleteResourceButton" on:click={() => deleteListing(listing.country)}>Borrar</Button>
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
                                <Label for="year">Year</Label>
                                <Input
                                    type="number"
                                    id="year"
                                    name="year"
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
                                    bind:value={newListing.date}
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="trimestral_pib">Pib trimestral</Label>
                                <Input
                                    type="text"
                                    id="trimestral_pib"
                                    name="trimestral_pib"
                                    placeholder="Pib trimestral"
                                    bind:value={newListing.trimestral_pib}
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="trimestral_variable_pib">Pib trimestral variable</Label>
                                <Input
                                    type="text"
                                    id="trimestral_variable_pib"
                                    name="trimestral_variable_pib"
                                    placeholder="Pib trimestral variable"
                                    bind:value={newListing.trimestral_variable_pib}
                                    required
                                />
                            </FormGroup>
                        </Col>
                        <Col class='mb-3'>
                            <FormGroup>
                                <Label for="annual_variable_pib">Pib anual variable</Label>
                                <Input
                                    type="text"
                                    id="annual_variable_pib"
                                    name="annual_variable_pib"
                                    placeholder="Pib anual variable"
                                    bind:value={newListing.annual_variable_pib}
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
