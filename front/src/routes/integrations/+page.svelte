<script>
    import { Container } from '@sveltestrap/sveltestrap';
</script>

<style>
    h1 {
        font-size: 32px;
        font-weight: bold;
        margin-bottom: 20px;
    }

    h6 {
        font-size: 20px;
        font-weight: bold;
        margin-bottom: 10px;
    }

    ul {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    li {
        margin-bottom: 10px;
    }

    a {
        font-size: 16px;
        text-decoration: none;
        color: #007bff; /* Cambia el color si lo deseas */
    }

    a:hover {
        text-decoration: underline;
    }
</style>

<Container>
    <h1>Integraciones Grupo 17</h1>

    <h6>Usos/Integraciones Ahmed</h6>
    <ul>
        <li><a href="integrations/usesAAF/chineseRecipesAAF">Uso Textual API Externa 1 (Chinese Recipes): sin proxy</a></li>
        <li><a href="integrations/usesAAF/golfDataAAF">Uso Widget API Externa 2(Golf Players): sin proxy</a></li>
        <li><a href="integrations/usesAAF/cricketProxyAAF">Uso Widget API Externa 3 (Cricket Rankings): con proxy</a></li>

        <li><a href="integrations/integrationCovidAAF">Integración 1: Datos EconomicFreedom y API de covid (Highcharts)</a></li>
        <li><a href="integrations/integrationInflationAAF/">Integración 2: Datos EconomicFreedom y API de inflation (Highcharts)</a></li>
    </ul>
</Container>
