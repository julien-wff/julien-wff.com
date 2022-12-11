<script lang="ts">
    export let direction: 'row' | 'column' = 'column';
</script>


<style>
    div {
        background: var(--gray);
        box-shadow: var(--block-shadow);
        padding: 1rem;
        border-radius: 1rem;
        display: flex;
        gap: 1rem;
    }
</style>


<div style:flex-direction={direction}>
    <slot/>
</div>
