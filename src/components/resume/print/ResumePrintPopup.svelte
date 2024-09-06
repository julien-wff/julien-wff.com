<script lang="ts">
    import ResumePrintSettings from '$components/resume/print/ResumePrintSettings.svelte';
    import { onMount } from 'svelte';

    let show = false;

    onMount(() => {
        show = true;
    });

    function closePopup() {
        show = false;
    }

    function togglePopup() {
        show = !show;
    }

    function handleKeyDown(ev: KeyboardEvent) {
        if (ev.key === 'Escape') {
            closePopup();
            return;
        }

        if (ev.ctrlKey && ev.key === 'p') {
            ev.preventDefault();
            togglePopup();
            return;
        }
    }
</script>

<style>
    .popup-backdrop {
        position: fixed;
        display: grid;
        place-content: center;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: 1000;
        background-color: rgba(0, 0, 0, 0.25);
    }

    @media print {
        .popup-backdrop {
            display: none;
        }
    }
</style>

<svelte:window on:afterprint={closePopup}/>
<svelte:document on:keydown={handleKeyDown}/>

{#if show}
    <!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
    <div class="popup-backdrop" on:click|self={closePopup} role="dialog" aria-modal="true"
         tabindex="-1">
        <ResumePrintSettings on:hide={closePopup}/>
    </div>
{/if}
