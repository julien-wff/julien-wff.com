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
        <span>
            Étudiant en 1ère année de cycle ingénieur (BAC +3) à CESI école d'ingénieur, spécialité informatique.
        </span>
        <span>
            À la recherche d'un stage en IT du 15 janvier au 26 avril 2024
        </span>
    </div>
</ResumeBox>
