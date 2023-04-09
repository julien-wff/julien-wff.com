<script lang="ts">
    import ResumeBox from './ResumeBox.svelte';
</script>


<style>
    img {
        height: 8rem;
        width: 8rem;
        border-radius: 100%;
    }

    div {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
    }
</style>


<ResumeBox direction="row">
    <img src="/resume/profile.png" alt="Julien Wolff" height="160" width="160" />
    <div>
        <h1>Julien WOLFF</h1>
        <span>
            Étudiant en 2ème année de classe préparatoire à CESI école d’ingénieur, 
            spécialité informatique
        </span>
    </div>
</ResumeBox>
