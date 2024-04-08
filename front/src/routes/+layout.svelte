<script>
    import Footer from './Footer.svelte';
    import Header from './Header.svelte';
</script>
<svelte:head>
    <title>SOS2324-17 Project</title>
</svelte:head>
<main>
    <Header/>
    <h1>SOS2324-17 Project</h1>
    <slot></slot>
    <Footer/>
</main>