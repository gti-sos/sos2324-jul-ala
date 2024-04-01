<script>
    import { dev } from '$app/environment';
    import {
    Nav,
    NavItem,
    Dropdown,
    DropdownItem,
    DropdownToggle,
    DropdownMenu,
    NavLink
  } from '@sveltestrap/sveltestrap';

  let API = '/api/v1';
    if (dev)
        API = 'http://localhost:20000'+API;

  let API_v2 = '/api/v2';
    if (dev)
        API_v2 = 'http://localhost:20000'+API_v2;

</script>
<style>
    @import "/styles.css";
</style>

<main> 
    <Nav tabs class="fixed-navbar" style="background-color: white; justify-content: center;"> 
        <NavItem class="nav-item"> 
            <NavLink href="/" class="nav-link d-flex align-items-center"> 
                <img src="/home-icon.png" alt="Casa" style="width: 20px; height: 20px; margin-right: 5px;"> 
                Inicio 
            </NavLink> 
        </NavItem>
        <Dropdown nav autoClose={true}>
            <DropdownToggle nav class="nav-link" caret>
                <img src="/icono-api.png" alt="API" style="width: 20px; height: 20px; margin-right: 5px;"> 
                APIS
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem class="menu-item" href = "{API}/trimestralpib_stats">trimestralpib_stats [v1] (Adrian León)</DropdownItem>
                <DropdownItem class="menu-item" href = "{API_v2}/trimestralpib_stats">trimestralpib_stats [v2] (Adrian León)</DropdownItem>
                <DropdownItem class="menu-item" href = "{API}/manofthematch">manofthematch [v1] (Antonio Rumí)</DropdownItem>
                <DropdownItem class="menu-item" href = "{API}/economicfreedom_stats">economicfreedom_stats [v1] (Ahmed Fraj)</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown nav autoClose={true}>
            <DropdownToggle nav class="nav-link" caret>
                <img src="/icono-github.png" alt="GitHub" style="width: 20px; height: 20px; margin-right: 5px;"> 
                GitHub
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem class="menu-item" href = "https://github.com/adrile15">adrile15</DropdownItem>
                <DropdownItem class="menu-item" href = "https://github.com/antrummor">antrummor</DropdownItem>
                <DropdownItem class="menu-item" href = "https://github.com/ahmfra">ahmfra</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown nav autoClose={true}>
            <DropdownToggle nav class="nav-link" caret>
                <img src="/icono-frontend.png" alt="Frontends" style="width: 20px; height: 20px; margin-right: 5px;"> 
                Frontends
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem class="menu-item" href = "/trimestralpib_stats">trimestralpib_stats (Adrian León)</DropdownItem>
                <DropdownItem class="menu-item" href = "/manofthematch">manofthematch (Antonio Rumí)</DropdownItem>
                <DropdownItem class="menu-item" href = "/economicfreedom_stats">economicfreedom_stats (Ahmed Fraj)</DropdownItem>
            </DropdownMenu>
        </Dropdown>
        <Dropdown nav autoClose={true}>
            <DropdownToggle nav class="nav-link" caret>
                <img src="/icono-documentacion.png" alt="Documentaciones" style="width: 20px; height: 20px; margin-right: 5px;"> 
                Documentaciones
            </DropdownToggle>
            <DropdownMenu>
                <DropdownItem class="menu-item" href = "{API}/trimestralpib_stats/docs">trimestralpib_stats [v1] (Adrian)</DropdownItem>
                <DropdownItem class="menu-item" href = "{API_v2}/trimestralpib_stats/docs">trimestralpib_stats [v2] (Adrian)</DropdownItem>
                <DropdownItem class="menu-item" href = "{API}/manofthematch/docs">manofthematch [v1] (Antonio)</DropdownItem>
                <DropdownItem class="menu-item" href = "{API}/economicfreedom_stats/docs">economicfreedom_stats [v1](Ahmed)</DropdownItem>
            </DropdownMenu>
        </Dropdown>
    </Nav>
</main>