<script lang="ts">
    export let icon: ConstructorOfATypedSvelteComponent;
    export let href: string | null = null;
    export let letterspacing = '0';
</script>


<style>
    .container {
        display: flex;
        align-items: center;
        height: 2rem;
        gap: 0.25rem;
    }

    .icon {
        display: grid;
        place-items: center;
        height: 2rem;
        width: 2rem;
    }
</style>


{#if href}
    <a {href} rel="noreferrer, noopener">
        <div class="container" style:letter-spacing={letterspacing}>
            <div class="icon">
                <svelte:component this="{icon}" color="var(--blue)" size="1.5rem" />
            </div>
            <slot />
        </div>
    </a>
{:else}
    <div class="container" style:letter-spacing={letterspacing}>
        <div class="icon">
            <svelte:component this="{icon}" color="var(--blue)" size="1.5rem" />
        </div>
        <slot />
    </div>
{/if}
