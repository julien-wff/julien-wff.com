<style>
    .container {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: .5rem;
    }

    .level-bullet {
        margin-left: .1rem;
        width: .75rem;
        height: .75rem;
        border-radius: .3rem;
        background-color: var(--blue);
    }
</style>


<div class="container">
    <div class="level-bullet"/>
    <div class="competence">
        <slot />
    </div>
</div>
