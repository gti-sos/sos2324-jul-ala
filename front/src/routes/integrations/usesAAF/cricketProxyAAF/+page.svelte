<svelte:head>
    <script src="https://cdn.jsdelivr.net/npm/apexcharts"></script>
</svelte:head>

<script>
    import { onMount } from 'svelte';
    import { dev } from '$app/environment';
    import { Container, Row, Col, ListGroup, ListGroupItem } from '@sveltestrap/sveltestrap';

    let teams = [];

    onMount(async () => {
        try {
            let API = 'http://localhost:20000/api/v2'; 

            const response = await fetch(`${API}/economicfreedom_stats/proxyCricketAAF`);
            const data = await response.json();
            console.log(data);
            if (data && data.data) {
                console.log(data.data);
                teams = data.data.slice(0, 10); // Seleccionar solo los primeros 10 equipos
                if (teams.length > 0) {
                    const chartData = {
                        labels: teams.map(team => team.team),
                        series: teams.map(team => team.point)
                    };

                    const options = {
                        chart: {
                            type: 'pie',
                            height: 400
                        },
                        labels: chartData.labels,
                        series: chartData.series,
                        responsive: [{
                            breakpoint: 480,
                            options: {
                                chart: {
                                    width: 200
                                },
                                legend: {
                                    position: 'bottom'
                                }
                            }
                        }]
                    };

                    new ApexCharts(document.querySelector('#chart'), options).render();
                }
            } else {
                console.error('No se recibieron datos válidos de la API.');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    });
</script>

<Container>
    <h1 style="margin-bottom: 20px;">Uso Widget API Externa 3 (Cricket API): con proxy (ApexCharts) </h1>
    <h5>Ranking de los 10 mejores equipos de Cricket</h5>
    {#if teams.length > 0}
        <Row>
            {#each teams as team}
                <Col sm="6" md="4" lg="3" style="margin-bottom: 20px;">
                    <ListGroupItem style="padding: 20px; border: 1px solid #dee2e6; border-radius: 0.25rem; background-color: white;">
                        <h5 class="mb-3">Nombre: {team.team}</h5>
                        <p class="mb-2">Equipo: {team.rating}</p>
                        <p class="mb-2">Posición: {team.rank}</p>
                        <p class="mb-2">Puntuación: {team.point}</p>
                    </ListGroupItem>
                </Col>
            {/each}
        </Row>
    {:else}
        <p>No hay datos disponibles.</p>
    {/if}

    <div id="chart" style="margin-top: 20px; width: 100%; height: 400px;"></div>
</Container>
