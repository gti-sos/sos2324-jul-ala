<script>
    import { ButtonGroup, Button } from '@sveltestrap/sveltestrap';
    
    function redireccionar(url) {
      window.location.href = url;
    }
  </script>
  
  <h1>Redireccionar a URL</h1>
  <ButtonGroup>
    <Button variant="primary" on:click={() => redireccionar('https://sos2324-17.appspot.com/integrations/manofthematch/geoconding')}>uso</Button>
    <Button variant="primary" on:click={() => redireccionar('https://sos2324-17.appspot.com/integrations/manofthematch/nijaapi')}>proxy</Button>
    <Button variant="primary" on:click={() => redireccionar('https://sos2324-17.appspot.com/integrations/manofthematch/integracion')}>integracion</Button>
    <Button variant="primary" on:click={() => redireccionar('https://sos2324-17.appspot.com/integrations/manofthematch/uso2')}>uso2</Button>
  </ButtonGroup> 