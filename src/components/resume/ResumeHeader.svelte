<script lang="ts">
    import ResumeBox from './ResumeBox.svelte';
</script>


<style>
    .img-container {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    img {
        height: 8rem;
        width: 8rem;
        border-radius: 100%;
    }

    .info-container {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }

    @media all and (max-width: 35rem) {
        img {
            height: 6rem;
            width: 6rem;
        }
    }

    @media all and (max-width: 30rem) {
        .img-container {
            display: none;
        }
    }
</style>


<ResumeBox direction="row">
    <div class="img-container">
        <img src="/resume/profile.png" alt="Julien Wolff" height="160" width="160" />
    </div>
    <div class="info-container">
        <h1>Julien WOLFF</h1>
        <span>
            Étudiant en 2ème année de classe préparatoire à CESI école d’ingénieur, 
            spécialité informatique
        </span>
    </div>
</ResumeBox>
