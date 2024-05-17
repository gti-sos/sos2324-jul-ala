<script>
    import axios from 'axios';
    import { onMount } from 'svelte';
    import { Container, ListGroup, ListGroupItem } from '@sveltestrap/sveltestrap';

    //Para los detalles de un canal
    const options1 = {
        method: 'GET',
        url: 'https://chinese-food-db.p.rapidapi.com/5',
        headers: {
            'X-RapidAPI-Key': '4e1a27c673msh81b6527001dad5dp145d49jsne302105ebb4f',
            'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
        }
    };
    // Variable que guarda los detalles del canal
    let recipeDetail = null;

    // Función para obtener los datos del primer endpoint
    const fetchRecipeDetail = async () => {
        try {
            const response = await axios.request(options1);
            recipeDetail = response.data;
        } catch (error) {
            console.error('Error al obtener los detalles de la pagina:', error);
        }
    };
    //Para la playlist
    const options2 = {
        method: 'GET',
        url: 'https://chinese-food-db.p.rapidapi.com/',
        headers: {
            'X-RapidAPI-Key': '4e1a27c673msh81b6527001dad5dp145d49jsne302105ebb4f',
            'X-RapidAPI-Host': 'chinese-food-db.p.rapidapi.com'
        }
    };

    // Variable que guarda los datos de la segunda llamada a la API
    let recipes = null;

    // Función para obtener los datos del segundo endpoint
    const fetchRecipes = async () => {
        try {
            const response = await axios.request(options2);
            recipes = response.data;
        } catch (error) {
            console.error('Error al obtener los videos de la lista de reproducción:', error);
        }
    };

    onMount(() => {
        fetchRecipeDetail();
        fetchRecipes();
    });
</script>

<style>
    /* Estilos para el encabezado */
    .header {
        background-color: #f8f9fa;
        padding: 20px;
        text-align: center;
    }

    /* Estilos para las tarjetas */
    .card {
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 20px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    }

    .card-img-top {
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
        max-height: 200px; /* Limita la altura de la imagen */
        object-fit: cover; /* Escala la imagen para que se ajuste al contenedor */
    }

    .card-body {
        padding: 20px;
    }

    .card-title {
        font-size: 1.2rem;
        font-weight: bold;
        margin-bottom: 10px;
    }

    .card-text {
        font-size: 1rem;
    }

    .list-group {
        margin-bottom: 20px;
    }

    .list-group-item {
        border-color: #ddd;
        border-radius: 0;
    }
</style>

<Container class="mt-5">
    <div class="header">
        <h1>Recetas de Comida China</h1>
    </div>

    <h3 class="mt-4">Detalles de la receta</h3>
    {#if recipeDetail}
        <ListGroup>
            <ListGroupItem>Nombre de la receta: {recipeDetail.title}</ListGroupItem>
            <ListGroupItem>Nivel de dificultad: {recipeDetail.difficulty}</ListGroupItem>
            <ListGroupItem>Porcion: {recipeDetail.portion}</ListGroupItem>
            <ListGroupItem>Tiempo de cocción: {recipeDetail.time}</ListGroupItem>
            <ListGroupItem>Descripcion: {recipeDetail.description}</ListGroupItem>
        </ListGroup>
    {:else}
        <p>Cargando detalles de la receta...</p>
    {/if}

    <hr>

    <h3 class="mt-4">Recetas de Comida China</h3>

    {#if recipes}
    <div class="row">
        {#each recipes as recipe}
            <div class="col-lg-4 mb-4">
                <div class="card">
                    <img src="{recipe.image}" class="card-img-top" alt="{recipe.title}">
                    <div class="card-body">
                        <h5 class="card-title">{recipe.title}</h5>
                        <p class="card-text">Difficulty: {recipe.difficulty}</p>
                        <!-- Puedes agregar más atributos aquí según sea necesario -->
                    </div>
                </div>
            </div>
        {/each}
    </div>
    {:else}
        <p>No se han encontrado recetas.</p>
    {/if}
</Container>