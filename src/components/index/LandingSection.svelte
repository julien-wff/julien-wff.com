<script>
    import LandingBackdrop from "./LandingBackdrop.svelte";
</script>

<section>
    <LandingBackdrop/>

    <div class="content">
        <h1>
            Salut,
            <br>
            Moi c'est <span class="text-gradient">Julien</span>
        </h1>
    </div>
</section>

<style>
    section {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content {
        z-index: 2;
    }

    h1 {
        font-size: 3rem;
    }

    .text-gradient {
        background: linear-gradient(90deg, var(--gradient-blue), var(--gradient-purple)) 50% 0;
        background-clip: text;
        background-size: 200% 100%;
        -webkit-text-fill-color: transparent;
    }
</style>
