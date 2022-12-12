<script lang="ts">
    import ResumeBox from './ResumeBox.svelte';

    export let title: string;
</script>


<ResumeBox>
    <h2>{title}</h2>
    <slot />
</ResumeBox>
