<script lang="ts">
    export let direction: 'row' | 'column' = 'column';
    export let mb = false;
</script>


<style>
    div {
        background: var(--gray);
        box-shadow: var(--block-shadow);
        padding: var(--spacing);
        border-radius: 1rem;
        display: flex;
        gap: var(--spacing);
    }

    div.mb {
        margin-bottom: var(--spacing);
    }
</style>


<div style:flex-direction={direction} class:mb>
    <slot/>
</div>
