<script>
    import { onMount } from "svelte";
    import { dev } from "$app/environment";

    let API = "/api/v2/manofthematch";

    if (dev) API = "http://localhost:20000" + API;

    let dataset = [];

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

    //Cargar los datos en la base de datos
    async function loadData() {
        try {
            let response = await fetch(API + "/loadInitialData", {
                method: "GET",
            });

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

    // Función para ir a la página siguiente
    function nextPage() {
        currentPage++;
        getData();
    }

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