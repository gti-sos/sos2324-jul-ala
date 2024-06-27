<script>
    import { ButtonGroup, Button } from '@sveltestrap/sveltestrap';
    
    function redireccionar(url) {
        window.location.href = url;
    }
</script>

<style>
    .button-group-container {
        display: flex;
        justify-content: center;
        margin-top: 20px;
        margin-bottom: 40px; /* Separación del footer */
    }

    .button-group-container Button {
        margin: 0 10px; /* Separación entre botones */
    }
</style>
<h1 style="text-align: center;">Redireccionar a Uso/Integracion</h1>
<div class="button-group-container">
    <ButtonGroup>
        <Button variant="primary" on:click={() => redireccionar('https://sos2324-jul-ala.ew.r.appspot.com/integrations/trimestralpib_stats/cryptos')}>cryptos</Button>
        <Button variant="primary" on:click={() => redireccionar('https://sos2324-jul-ala.ew.r.appspot.com/integrations/trimestralpib_stats/perros')}>perros</Button>
        <Button variant="primary" on:click={() => redireccionar('https://sos2324-jul-ala.ew.r.appspot.com/integrations/trimestralpib_stats/crp')}>conProxy</Button>
        <Button variant="primary" on:click={() => redireccionar('https://sos2324-jul-ala.ew.r.appspot.com/integrations/trimestralpib_stats/leaderboard')}>Inflation vs Pib</Button>
    </ButtonGroup>
</div>
