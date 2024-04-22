<script lang="ts">
    export let title: string;
    export let subtitle: string;
    export let icon: ConstructorOfATypedSvelteComponent;
</script>


<style>
    .header {
        display: flex;
        align-items: center;
        min-height: 2.5rem;
        gap: .8rem;
        margin-bottom: .5rem;
    }

    .header-text {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
    }

    .icon {
        height: 2rem;
        width: 2rem;
        display: grid;
        place-items: center;
    }
</style>


<div class="section">
    <div class="header">
        <div class="icon">
            <svelte:component this={icon} color="var(--primary-color)" size="2rem" />
        </div>
        <div class="header-text">
            <h3>{title}</h3>
            <span class="small">{subtitle}</span>
        </div>
    </div>
    <slot />
</div>
