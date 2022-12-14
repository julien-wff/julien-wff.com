<script lang="ts">
    export let level: 0 | 1 | 2 | 3 = 0;
</script>


<style>
    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
    }

    .level {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: .15rem;
    }

    .level-bullet {
        width: .5rem;
        height: .5rem;
        border-radius: .3rem;
        border: .2rem solid var(--blue);
    }

    .level-bullet.filled {
        background-color: var(--blue);
    }
</style>


<div class="container">
    <div class="level">
        <div class="level-bullet" class:filled={level >= 1} />
        <div class="level-bullet" class:filled={level >= 2} />
        <div class="level-bullet" class:filled={level >= 3} />
    </div>
    <div class="competence">
        <slot />
    </div>
</div>
