<script context="module" lang="ts">
    import { writable } from 'svelte/store';

    let style: CSSStyleDeclaration;
    let landingBackdrop: HTMLDivElement;
    let resumeBoxes: NodeListOf<HTMLDivElement>;
    let links: NodeListOf<HTMLAnchorElement>;

    let noBackgroundMode = writable(false);
    let blackAndWhiteMode = writable(false);
    let underlineLinks = writable(true);

    let colorGradientMode = writable(true);
    let color1 = writable('#000000');
    let color2 = writable('#000000');
</script>

<script lang="ts">
    import { createEventDispatcher, onMount } from 'svelte';

    const dispatch = createEventDispatcher();

    onMount(() => {
        if (!style) {
            const root = document.querySelector(':root')!;
            style = getComputedStyle(root);
        }

        if (!landingBackdrop)
            landingBackdrop = document.querySelector('.landing-backdrop')!;

        if (!resumeBoxes)
            resumeBoxes = document.querySelectorAll('.resume-box')!;

        if (!links)
            links = document.querySelectorAll('a')!;

        $color1 = style.getPropertyValue('--gradient-blue');
        $color2 = style.getPropertyValue('--gradient-purple');

    });

    function reflectUpdates() {
        landingBackdrop.style.visibility = $noBackgroundMode || $blackAndWhiteMode ? 'hidden' : 'visible';

        const { body } = document;

        if ($blackAndWhiteMode) {
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

            const col2 = $colorGradientMode ? $color2 : $color1;
            body.style.setProperty('--gradient-blue', $color1);
            body.style.setProperty('--gradient-purple', col2);
            body.style.setProperty('--primary-color', `color-mix(in srgb, ${$color1}, ${col2})`);
        }

        if ($noBackgroundMode) {
            body.style.setProperty('--background-color', 'white');
            resumeBoxes.forEach(box => {
                box.style.setProperty('background-color', 'transparent');
                box.style.setProperty('box-shadow', 'none');
                box.style.setProperty('outline', '2px solid var(--primary-color)');
            });
        } else {
            body.style.removeProperty('--background-color');
            resumeBoxes.forEach(box => {
                box.style.removeProperty('background-color');
                box.style.removeProperty('box-shadow');
                box.style.removeProperty('outline');
            });
        }

        links.forEach(link => {
            link.style.textDecoration = $underlineLinks ? 'underline' : 'none';
        });
    }

    function handlePrint() {
        window.print();
    }
</script>


<style>
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
</style>


<div class="popup-content">
    <h1>Print menu</h1>

    <h2>Global style</h2>

    <label>
        <input bind:checked={$noBackgroundMode} on:change={reflectUpdates} type="checkbox"/>
        No background mode
    </label>

    <label>
        <input bind:checked={$blackAndWhiteMode} on:change={reflectUpdates} type="checkbox"/>
        Black and white mode
    </label>

    <label>
        <input bind:checked={$underlineLinks} on:change={reflectUpdates} type="checkbox"/>
        Underline links
    </label>

    {#if !$blackAndWhiteMode}
        <h2>Colors</h2>

        <label>
            <input type="checkbox" bind:checked={$colorGradientMode} on:change={reflectUpdates}/>
            Color gradient mode
        </label>

        <label>
            <input type="color" bind:value={$color1} on:input={reflectUpdates}/>
            {#if $colorGradientMode}
                Start Color
            {:else}
                Theme color
            {/if}
        </label>

        {#if $colorGradientMode}
            <label>
                <input type="color" bind:value={$color2} on:input={reflectUpdates}/>
                End Color
            </label>
        {/if}
    {/if}

    <div class="btn-rows">
        <button class="close-btn" on:click={() => dispatch('hide')}>Close</button>
        <button class="print-btn" on:click={handlePrint}>Print</button>
    </div>
</div>
