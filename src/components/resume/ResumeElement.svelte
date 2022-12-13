<script lang="ts">
    import ResumeBox from './ResumeBox.svelte';

    export let title: string;
    export let gap: 'small' | 'medium' = 'medium';
</script>


<style>
    div {
        display: flex;
        flex-direction: column;
    }

    .gap-medium {
        gap: var(--spacing);
    }

    .gap-small {
        gap: calc(var(--spacing) / 2);
    }
</style>


<ResumeBox>
    <h2>{title}</h2>
    <div class:gap-small={gap == 'small'} class:gap-medium={gap == 'medium'}>
        <slot />
    </div>
</ResumeBox>
