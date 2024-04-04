<script>
    import {onMount} from "svelte";
    import {dev} from "$app/environment";

    let API = "/api/v2/manofthematchs";

    if(dev)
        API = "https://localhost:20000"+API;

    let salaries = []
    let newSalarie = {
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
    
     let errorMsg="";
     let confirmation="";

    onMount(()=>{
        getData();
    })

    async function getData() {
        try {
            const response = await fetch(API, { method: "GET" });
            let data = await response.json();
            console.log(data);
            let status = response.status;
            if (status == 200) {
                salaries = data;
                confirmation = "Datos obtenidos correctamente";
                
            } else {
                errorMsg = `Error ${status}: Los datos no se han podido obtener`;
            }
        } catch (error) {
            errorMsg = error.message;
        }
    }

    async function loadData() {
        try {
            const response = await fetch(API + "/loadInitialData", { method: "GET" });
            const status = response.status;
            if (status === 201) {
                confirmation = "Datos cargados correctamente";
            } else {
                errorMsg = `Error ${status}: Los datos ya han sido cargados`;
            }
        } catch (error) {
            errorMsg = error.message;
        }
    }

    async function createData(){ 
        try{
            let response =  await   fetch(API,{
                                    method: "POST",
                                    headers:{
                                        "Content-Type": "application/json"
                                    },
                                    body: JSON.stringify(newSalarie)
                                });

            let status = await response.status;
            console.log(`Creation response status ${status}`);
            if(status == 201)
                getData();
            else
                errorMsg = "code:"+status;

    
        }catch(e){
            errorMsg = e;
        } 
    }

    async function deleteData(n){
        console.log(`Deleting contact with country ${n}`);
        try{
            let response =  await   fetch(API+"/"+n,{
                                    method: "DELETE"
                                    });
    
        if(response.status == 200)
        getContacts();
        else
            errorMsg = "code:"+response.status;
    
            }catch(e){
                    errorMsg = e;
            } 
} 

async function deleteAllData() {
        try {
            const response = await fetch(API, { method: "DELETE" });
            const status = response.status;
            if (status === 200) {
                salaries = [];
                confirmation = "Todos los datos eliminados";
            } else {
                errorMsg = `Error ${status}: No se pudieron eliminar los datos`;
            }
        } catch (error) {
            errorMsg = error.message;
        }
    }
</script>

<div class="container">
    <h1>Salaries Datasets</h1>

    <button on:click={loadData}>Cargar datos iniciales</button>
    <button on:click={getData}>Obtener todos los datos</button>
    <button on:click={createData}>Crear nuevo dato</button>
    <button on:click={deleteAllData}>Eliminar todos los datos</button>

    <ul class="data-list">
        {#each salaries as salaries}
    <li class="data-item">
        <span>{salaries.date}, {salaries.country}, {salaries.Opponent}, {salaries.GoalScored}, {salaries.BallPossession}, {salaries.attemps}, {salaries.OnTarget}, {salaries.OffTarget}, {salaries.Blocked}, {salaries.Corners}</span>
        <button on:click={() => deleteData(salaries.year, salaries.country)}>Eliminar</button>
    </li>
{/each}

    </ul>

    {#if confirmation !== ""}
        <div class="confirmation">{confirmation}</div>
    {/if}
    {#if errorMsg !== ""}
        <div class="error">Error: {errorMsg}</div>
    {/if}

<table class="data-table">
    <thead>
        <tr>
            <th> Fecha </th>
            <th> Pais </th>
            <th> Oponente </th>
            <th> Goles </th>
            <th> Posesion </th>
            <th> Tiros </th>
            <th> Tiros a puerta </th>
            <th> Tiros fuera </th>
            <th> Tiros bloqueados </th>
            <th> Corners </th>
        </tr>
    </thead>
    <!-- Inputs para agregar nuevos datos -->
    <tbody>
        <tr>
            <td><input bind:value={newSalarie.date} /></td>
            <td><input bind:value={newSalarie.country} /></td>
            <td><input bind:value={newSalarie.Opponent} /></td>
            <td><input bind:value={newSalarie.GoalScored} /></td>
            <td><input bind:value={newSalarie.BallPossession} /></td>
            <td><input bind:value={newSalarie.attemps} /></td>
            <td><input bind:value={newSalarie.OnTarget} /></td>
            <td><input bind:value={newSalarie.OffTarget} /></td>
            <td><input bind:value={newSalarie.Blocked} /></td>
            <td><input bind:value={newSalarie.Corners} /></td>
            <td><button on:click={createData}>Crear</button></td>
        </tr>
    </tbody>
</table>
</div>