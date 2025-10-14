<script lang="ts">
    import ResumePrintSettings from '$components/resume/print/ResumePrintSettings.svelte';
    import { onMount } from 'svelte';

    let show = $state(false);

    onMount(() => {
        show = true;
    });

    function handleBackdropClick(ev: Event) {
        const target = ev.target as EventTarget & HTMLDivElement;

        if (target.classList.contains('popup-backdrop')) {
            closePopup();
        }
    }

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

<svelte:window onafterprint={closePopup}/>
<svelte:document onkeydown={handleKeyDown}/>

{#if show}
    <!-- svelte-ignore a11y_click_events_have_key_events, a11y_no_static_element_interactions -->
    <div class="popup-backdrop" onclick={handleBackdropClick} role="dialog" aria-modal="true" tabindex="-1">
        <ResumePrintSettings onhide={closePopup}/>
    </div>
{/if}
