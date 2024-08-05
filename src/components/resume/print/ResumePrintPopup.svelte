<script lang="ts">
    import { onMount } from 'svelte';

    let show = false;
    let style: CSSStyleDeclaration;
    let landingBackdrop: HTMLDivElement;

    let noBackgroundMode = false;
    let blackAndWhiteMode = false;

    let colorGradientMode = true;
    let color1 = '#000000';
    let color2 = '#000000';

    onMount(() => {
        const root = document.querySelector(':root')!;
        style = getComputedStyle(root);

        color1 = style.getPropertyValue('--gradient-blue');
        color2 = style.getPropertyValue('--gradient-purple');

        landingBackdrop = document.querySelector('.landing-backdrop')!;

        show = true;
    });

    function reflectUpdates() {
        landingBackdrop.style.visibility = noBackgroundMode || blackAndWhiteMode ? 'hidden' : 'visible';

        const { body } = document;

        if (blackAndWhiteMode) {
            body.style.setProperty('--background-color', 'white');
            body.style.setProperty('--text-color', 'black');
            body.style.setProperty('--gradient-blue', 'black');
            body.style.setProperty('--gradient-purple', 'black');
            body.style.setProperty('--primary-color', 'black');
            body.style.setProperty('filter', 'grayscale(100%)');
        } else {
            body.style.removeProperty('filter');
            body.style.removeProperty('--background-color');
            body.style.removeProperty('--text-color');

            const col2 = colorGradientMode ? color2 : color1;
            body.style.setProperty('--gradient-blue', color1);
            body.style.setProperty('--gradient-purple', col2);
            body.style.setProperty('--primary-color', `color-mix(in srgb, ${color1}, ${col2})`);
        }
    }

    function handlePrint() {
        window.print();
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

    .popup-content {
        position: relative;
        padding: 1rem;
        width: calc(100vw - 4rem);
        max-width: 20rem;
        background-color: var(--background-color);
        border-radius: 1rem;
        box-shadow: var(--box-shadow);
    }

    h1 {
        margin-bottom: 1rem;
    }

    h2 {
        margin-top: 1rem;
        margin-bottom: .5rem;
    }

    label {
        display: flex;
        gap: .5rem;
        align-items: center;
        margin-bottom: .5rem;
        user-select: none;
    }

    input[type="checkbox"] {
        margin: 0;
        accent-color: var(--primary-color);
        height: 1rem;
        width: 1rem;
    }

    input[type="color"] {
        width: 1rem;
        height: 1rem;
        border: none;
        border-radius: .15rem;
        cursor: pointer;
        margin: 0;
        padding: 0;
    }

    input[type="color"]::-webkit-color-swatch-wrapper {
        padding: 0;
    }

    input[type="color"]::-webkit-color-swatch {
        border: none;
        border-radius: .15rem;
    }

    input[type="color"]::-moz-color-swatch {
        border: none;
        border-radius: .15rem;
    }

    .btn-rows {
        margin-top: 1rem;
        display: grid;
        gap: 1rem;
        grid-template-columns: repeat(2, 1fr);
    }

    button {
        padding: .5rem;
        border: none;
        border-radius: 0.5rem;
        font-size: inherit;
        cursor: pointer;
    }

    .close-btn {
        background-color: var(--danger-color);
        color: var(--text-color-over-primary);
    }

    .print-btn {
        background-color: var(--primary-color);
        color: var(--text-color-over-primary);
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
        <div class="popup-content">
            <h1>Print menu</h1>

            <h2>Global style</h2>

            <label>
                <input type="checkbox" bind:checked={noBackgroundMode} on:change={reflectUpdates}/>
                No background mode
            </label>

            <label>
                <input type="checkbox" bind:checked={blackAndWhiteMode} on:change={reflectUpdates}/>
                Black and white mode
            </label>

            {#if !blackAndWhiteMode}
                <h2>Colors</h2>

                <label>
                    <input type="checkbox" bind:checked={colorGradientMode} on:change={reflectUpdates}/>
                    Color gradient mode
                </label>

                <label>
                    <input type="color" bind:value={color1} on:input={reflectUpdates}/>
                    {#if colorGradientMode}
                        Start Color
                    {:else}
                        Color
                    {/if}
                </label>

                {#if colorGradientMode}
                    <label>
                        <input type="color" bind:value={color2} on:input={reflectUpdates}/>
                        End Color
                    </label>
                {/if}
            {/if}

            <div class="btn-rows">
                <button class="close-btn" on:click={closePopup}>Close</button>
                <button class="print-btn" on:click={handlePrint}>Print</button>
            </div>
        </div>
    </div>
{/if}
