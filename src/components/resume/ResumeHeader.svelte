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

    .bold {
        font-weight: bold;
    }

    @media all and (max-width: 53rem) {
        .info-container {
            gap: .5rem;
        }
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
        <span class="bold">
            Stage en développement informatique du 15 janvier au 26 avril 2024.
        </span>
        <span>
            Étudiant en 1ʳᵉ année de cycle ingénieur <span class="no-break">(BAC +3)</span> à CESI École d'Ingénieurs, spécialité informatique.
        </span>
    </div>
</ResumeBox>
