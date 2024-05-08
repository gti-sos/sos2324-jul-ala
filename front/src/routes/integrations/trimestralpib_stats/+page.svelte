<script>
    import { ButtonGroup, Button } from '@sveltestrap/sveltestrap';
    
    function redireccionar(url) {
      window.location.href = url;
    }
  </script>
  
  <h1>Redireccionar a URL</h1>
  <ButtonGroup>
    <Button variant="primary" on:click={() => redireccionar('https://sos2324-12.appspot.com/integrations/trimestralpib_stats/cryptos')}>cryptos</Button>
    <Button variant="primary" on:click={() => redireccionar('https://sos2324-12.appspot.com/integrations/trimestralpib_stats/perros')}>reviews</Button>
    <Button variant="primary" on:click={() => redireccionar('https://sos2324-12.appspot.com/integrations/trimestralpib_stats/')}></Button>
  </ButtonGroup>