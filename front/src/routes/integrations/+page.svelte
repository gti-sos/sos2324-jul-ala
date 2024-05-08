<script>
    import { ButtonGroup, Button } from '@sveltestrap/sveltestrap';
    
    function redireccionar(url) {
      window.location.href = url;
    }
  </script>
  
  <h1>Redireccionar a URL</h1>
  <ButtonGroup>
    <Button variant="primary" on:click={() => redireccionar('https://sos2324-12.appspot.com/integraciones/trimestralpib_stats')}>Adrian León</Button>
    <Button variant="primary" on:click={() => redireccionar('https://sos2324-12.appspot.com/integraciones/economicfreedom_stats')}>Ahmed Fraj</Button>
    <Button variant="primary" on:click={() => redireccionar('https://sos2324-12.appspot.com/integraciones/manofthematch')}>Antonio Rumí</Button>
  </ButtonGroup>