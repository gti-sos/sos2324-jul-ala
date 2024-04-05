




























<script>
    import { onMount } from "svelte";
    import { dev } from "$app/environment";

    let API = "/api/v2/manofthematch";

    if (dev) API = "http://localhost:20000" + API;

    let dataset = [];

<<<<<<< HEAD
    //variables para la busqueda de campos
    let from = "";
    let to = "";
    let year = 0;
    let date = "";
    let country = "";
    let Opponent = "";
    let GoalScored = "";
    let BallPossession = "";
    let attemps = "";
    let OnTarget = "";
    let OffTarget = "";
    let Blocked = "";
    let Corners = "";
=======
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
>>>>>>> 159db27520771d637d93c303e11b18d568bd61cb

    //datos a crear y por defecto en la tabla
    let newData = {
        year: 2018,
        date: "09/03/2018",
        country: "Spain",
        Opponent: "China",
        GoalScored: "3",
        BallPossession: "34",
        attemps: "12",
        OnTarget: "6",
        OffTarget: "4",
        Blocked: "2",
        Corners: "45",
    };

    //mensajes
    let errorMsg = "";
    let confirmation = "";

    //offset
    let currentPage = 0;
    //limit
    const pageSize = 10;
    //estado de la tabla:
    let mostrarTabla = false;

    //cargar los datos cuando se cargue la pagina
    onMount(() => {
        mostrarTabla = false;
        toggleTabla();
        limpiarCampos();
        getData();
    });

<<<<<<< HEAD
    //Cargar los datos en la base de datos
    async function loadData() {
        try {
            let response = await fetch(API + "/loadInitialData", {
                method: "GET",
=======


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
>>>>>>> 159db27520771d637d93c303e11b18d568bd61cb
            });

<<<<<<< HEAD
            //Devuelve mensaje con un estado
            let status = await response.status;
            console.log(`Status code: ${status}`);
            if (status == 201) {
                getData();
                errorMsg = "";
                confirmation = "Datos cargados correctamente.";
            } else {
                errorMsg = "Ya se han cargado los datos de prueba.";
                confirmation = "";
=======

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
>>>>>>> 159db27520771d637d93c303e11b18d568bd61cb
            }
        } catch (e) {
            errorMsg = e;
        }
    }

    //Obtener todos los datos (GET de todos los recursos)
    async function getData() {
        try {
            let response;
            let parametros = `?limit=${pageSize}`;
            if (currentPage > 0) {
                // si estoy en una página distinta de la primera, calculamos el offset
                const offset = currentPage * pageSize;
                parametros += `&offset=${offset}`;
            }

            //compruebo si se han introducido parametros de busqueda
            if (from !== "") {
                let parsedFrom = parseInt(from);
                parametros += `&from=${parsedFrom}`;
            }
            if (to !== "") {
                let parsedTo = parseInt(to);
                parametros += `&to=${parsedTo}`;
            }
            if (year !== "") {
                let parsedWri = parseInt(year);
                parametros += `&year=${parsedWri}`;
            }
            if (date !== "") {
                parametros += `&date=${date}`;
            }
            if (country !== "") {
                parametros += `&country=${country}`;
            }
            if (Opponent !== "") {
                parametros += `&Opponent=${Opponent}`;
            }
            if (GoalScored !== "") {
                parametros += `&GoalScored=${GoalScored}`;
            }
            if (BallPossession !== "") {
            parametros += `&BallPossession=${BallPossession}`;
            }
            if (attemps !== "") {
                parametros += `&attemps=${attemps}`;
            }
            if (OnTarget !== "") {
                parametros += `&OnTarget=${OnTarget}`;
            }
            if (OffTarget !== "") {
                parametros += `&OffTarget=${OffTarget}`;
            }
            if (Blocked !== "") {
                parametros += `&Blocked=${Blocked}`;
            }
            if (Corners !== "") {
                parametros += `&Corners=${Corners}`;
            }

            response = await fetch(API + parametros, {
                method: "GET",
            });

            let respData = await response.json();
            let status = await response.status;
            if (status == 200) {
                dataset = respData;
                errorMsg = "";
            } else if (status == 404) {
                errorMsg = "No hay datos existentes.";
                confirmation = "";
                dataset = [];
            }
        } catch (e) {
            errorMsg = e;
        }
    }

<<<<<<< HEAD
    // Función para ir a la página siguiente
    function nextPage() {
        currentPage++;
        getData();
    }
=======

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
>>>>>>> 159db27520771d637d93c303e11b18d568bd61cb

    // Función para ir a la página anterior
    function previousPage() {
        if (currentPage > 0) {
            currentPage--;
            getData();
        }
    }

    //Hacer un POST (201, 400, 409, 500)
    async function createData() {
        try {
            let response = await fetch(API, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newData),
            });

            //Devuelve un mensaje con un estado
            let status = await response.status;
            console.log(`Status code: ${status}`);
            if (status == 201) {
                //aqui deberia establecer que el dataset ahora es dataset+newData
                dataset.push(newData);
                console.log("nuevo dataset");
                console.log(dataset);
                getData();
                errorMsg = "";
                confirmation = "Dato creado correctamente.";
            } else {
                if (status == 409) {
                    errorMsg = `Ya existe un dato para el país ${newData.country} para el año ${newData.year}.`;
                    confirmation = "";
                } else if (status == 400) {
                    errorMsg =
                        "No se han completado los campos de manera correcta.";
                    confirmation = "";
                } else {
                    errorMsg = "Error " + status;
                    confirmation = "";
                }
            }
        } catch (e) {
            errorMsg = e;
        }
    }

<<<<<<< HEAD
    //DELETE - Borrar todos los recursos (200)
    async function deleteAllData() {
        try {
            let response = await fetch(API, {
                method: "DELETE",
            });

            //Devuelve mensaje con un estado
            let status = await response.status;
            console.log(`Status code: ${status}`);
            if (status == 200) {
                dataset = [];
                errorMsg = "";
                confirmation = "Datos eliminados correctamente.";
            }
        } catch (e) {
            errorMsg = e;
        }
=======
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
>>>>>>> 159db27520771d637d93c303e11b18d568bd61cb
    }

    //DELETE - Borrar un recurso concreto (200, 404)
    async function deleteData(country, year) {
        try {
            let response = await fetch(API + "/" + country + "/" + year, {
                method: "DELETE",
            });

            //Devuelve mensaje con un estado
            let status = await response.status;
            console.log(`Status code: ${status}`);
            if (status == 200) {
                getData();
                errorMsg = "";
                confirmation = "Recurso eliminado correctamente.";
            } else {
                confirmation = "";
                errorMsg = `No existe un dato para el país ${country} para el año ${year}.`;
            }
        } catch (e) {
            errorMsg = e;
        }
    }

    //ocultamos y mostramos la tabla
    function toggleTabla() {
        mostrarTabla = !mostrarTabla;
    }

    //vaciar todos los campos de la tabla de filtrado
    function limpiarCampos() {
        from = "";
        to = "";
        let year = 0;
        let date = "";
        let country = "";
        let Opponent = "";
        let GoalScored = "";
        let BallPossession = "";
        let attemps = "";
        let OnTarget = "";
        let OffTarget = "";
        let Blocked = "";
        let Corners = "";
        getData();
    }
</script>

<div class="contenedor">
    <div class="titulo">
        <h2>Datos de los partidos del mundial 2018 FIFA</h2>
    </div>

<<<<<<< HEAD
    <table class="tablaCampos">
        <thead>
            <tr>
                <th> Año </th>
                <th> Fecha </th>
                <th> Pais </th>
                <th> Oponente </th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>
                    <input id="newYear" bind:value={newData.year} />
                </td>
                <td>
                    <input id="newDate" bind:value={newData.date} />
                </td>
                <td>
                    <input id="newCountry" bind:value={newData.country} />
                </td>
                <td>
                    <input
                        id="newOpponent"
                        bind:value={newData.Opponent}
                    />
                </td>
            </tr>
            <tr>
                <th> Goles </th>
                <th> Posesion del pais </th>
                <th> Tiros </th>
                <th> Tiros a puerta </th>
            </tr>
            <tr>
                <td>
                    <input
                        id="newGoalScored"
                        bind:value={newData.GoalScored}
                    />
                </td>
                <td>
                    <input
                        id="newBallPossession"
                        bind:value={newData.BallPossession}
                    />
                </td>
                <td>
                    <input
                        id="newAttemps"
                        bind:value={newData.attemps}
                    />
                </td>
                <td>
                    <input id="newOnTarget" bind:value={newData.OnTarget} />
                </td>
            </tr>
            <tr>
                <th> Tiros fuera </th>
                <th> Tiros bloqueados </th>
                <th> Corners </th>
            </tr>
            <tr>
                <td>
                    <input
                        id="newOffTarget"
                        bind:value={newData.OffTarget}
                    />
                </td>
                <td>
                    <input
                        id="newBlocked"
                        bind:value={newData.Blocked}
                    />
                </td>
                <td>
                    <input
                        id="newCorners"
                        bind:value={newData.Corners}
                    />
                </td>
            </tr>
        </tbody>
    </table>

    <ul>
        {#each dataset as data}
            <li class="objetoDeLista">
                <a
                    class="irDato"
                    href="/manofthematch/{data.country}/{data.year}"
                    >Ir al dato</a
                >
                {data.year}, {data.date}, {data.country}, {data.Opponent},
                {data.GoalScored},
                {data.BallPossession}, {data.attemps},
                {data.OnTarget},
                {data.OffTarget}, {data.Blocked}, {data.Corners}
                <button
                    class="eliminarDato"
                    on:click={deleteData(data.country, data.year)}
                    >Eliminar</button
                >
            </li>
=======
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
>>>>>>> 159db27520771d637d93c303e11b18d568bd61cb
        {/each}
    </ul>

    <div class="botones">
        <button on:click={loadData}>Cargar datos de prueba</button>
        <button on:click={createData}>Crear un nuevo dato</button>
        <button on:click={toggleTabla}>Filtrar</button>
        <button on:click={deleteAllData}>Eliminar todos los datos</button>
        <button id="pagAv" on:click={previousPage}>Página anterior</button>
        Página: {currentPage}
        <button id="pagNe" on:click={nextPage}>Página siguiente</button>
    </div>

<<<<<<< HEAD
    <div class="menuB">
        <table class:tabla={mostrarTabla}>
            <caption><h2>Menú de búsqueda</h2></caption>
            <thead>
                <tr>
                    <th> Año </th>
                    <th> Fecha </th>
                    <th> Pais </th>
                    <th> Oponente </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <input id="year" bind:value={year} />
                    </td>
                    <td>
                        <input id="date" bind:value={date} />
                    </td>
                    <td>
                        <input id="country" bind:value={country} />
                    </td>
                    <td>
                        <input
                            id="Opponent"
                            bind:value={Opponent}
                        />
                    </td>
                </tr>
                <tr>
                    <th> Goles </th>
                    <th> Posesion del pais </th>
                    <th> Tiros </th>
                    <th> Tiros a puerta </th>
                </tr>
                <tr>
                    <td>
                        <input 
                            id="GoalScored"
                            bind:value={GoalScored}
                        />
                    </td>
                    <td>
                        <input
                            id="BallPossession"
                            bind:value={BallPossession}
                        />
                    </td>
                    <td>
                        <input
                            id="attemps"
                            bind:value={attemps}
                        />
                    </td>
                    <td>
                        <input id="OnTarget" bind:value={OnTarget} />
                    </td>
                </tr>
                <tr>
                    <th> Tiros fuera </th>
                    <th> Tiros bloqueados </th>
                    <th> Corners </th>
                </tr>
                <tr>
                    <td>
                        <input
                            id="OffTarget"
                            bind:value={OffTarget}
                        />
                    </td>
                    <td>
                        <input
                            id="Blocked"
                            bind:value={Blocked}
                        />
                    </td>
                    <td>
                        <input
                            id="Corners"
                            bind:value={Corners}
                        />
                    </td>
                </tr>
                <tr>
                    <th> Datos desde el año: </th>
                    <th> Datos hasta el año: </th>
                </tr>
                <tr>
                    <td>
                        <input id="fromFilter" bind:value={from} />
                    </td>
                    <td>
                        <input id="toFilter" bind:value={to} />
                    </td>
                </tr>
                <tr>
                    <td id="noBorder" colspan="4" style="text-align: center;">
                        <button id="search" on:click={getData}>Buscar</button>

                        <button id="erase" on:click={limpiarCampos}
                            >Limpiar búsqueda</button
                        >
                    </td>
                </tr>
            </tbody>
        </table>
    </div>

    {#if confirmation != ""}
        <hr />
        <div class="conf">{confirmation}</div>
=======
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
    
>>>>>>> 159db27520771d637d93c303e11b18d568bd61cb
    {/if}

    {#if errorMsg != ""}
        <hr />
        <div class="err">ERROR: {errorMsg}</div>
    {/if}
</div>

<style>
    .contenedor {
        font-family: Arial, sans-serif;
        padding: 20px;
    }

    .titulo {
        text-align: center;
        margin-bottom: 20px;
    }

    .botones button {
        background-color: rgb(6, 0, 88);
        color: whitesmoke;
        align-content: center;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 10px;
    }

    .irDato {
        background-color: rgb(71, 64, 176);
        color: whitesmoke;
        align-content: center;
        border: none;
        border-radius: 6px;
        padding: 3px;
        cursor: pointer;
        margin-right: 10px;
    }

    .eliminarDato {
        background-color: rgb(139, 0, 0);
        color: whitesmoke;
        align-content: center;
        align-content: center;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 10px;
    }

    #pagAv {
        background-color: rgb(63, 63, 63);
        margin-right: 3px;
    }

    #pagNe {
        background-color: rgb(63, 63, 63);
        margin-left: 5px;
    }

<<<<<<< HEAD
    .objetoDeLista {
        padding: 3px;
    }

    .tablaCampos {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    .tablaCampos th,
    .tablaCampos td {
        border: 1px solid #dddddd;
        padding: 8px;
        text-align: left;
    }

    .tablaCampos th {
        background-color: #f2f2f2f5;
    }

    .tablaCampos input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
    }

    .conf {
        color: #3b8834;
    }

    .err {
        color: red;
    }

    .tabla {
        display: none;
    }

    .menuB {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    .menuB caption {
        text-align: center;
    }

    .menuB th,
    .menuB td {
        border: 1px solid #dddddd;
        padding: 8px;
        text-align: left;
    }

    .menuB th {
        background-color: #f2f2f2f5;
    }

    .menuB input {
        width: 100%;
        padding: 8px;
        box-sizing: border-box;
    }

    .menuB button {
        box-sizing: none;
        background-color: rgb(6, 0, 88);
        color: whitesmoke;
        align-content: center;
        padding: 10px 20px;
        border: none;
        border-radius: 4px;
        cursor: pointer;
        margin-right: 10px;
    }

    #noBorder {
        border: none;
        margin-top: 10px;
    }
</style>
=======
</Container>













>>>>>>> 159db27520771d637d93c303e11b18d568bd61cb
