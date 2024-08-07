<script lang="ts">
    import { languagesDisplay, type Language } from '$i18n/utils.ts';

    export let currentLanguage: Language;

    const additionalLanguagesCount = Object.keys(languagesDisplay).length - 1;
    const fullHeight = 3 + additionalLanguagesCount * 2.5; // Rem

    const languagesKeys = new Set(Object.keys(languagesDisplay) as Language[]);
    languagesKeys.delete(currentLanguage);
</script>

<div class="language-selector" style="--full-height: {fullHeight}rem">
    <button class="language">
        <span class="language-flag">
            {@html languagesDisplay[currentLanguage].iconRaw}
        </span>
        {languagesDisplay[currentLanguage].displayShort}
    </button>
    {#each Array.from(languagesKeys) as language}
        {@const lang = languagesDisplay[language]}
        <a class="language" href="/{language}/">
            <img src={lang.icon.src}
                 alt={lang.displayShort}
                 height={lang.icon.height}
                 width={lang.icon.width}
                 decoding="async"
                 class="language-flag"/>
            {lang.displayShort}
        </a>
    {/each}
</div>

<style>
    .language-selector {
        height: 3rem;
        display: flex;
        flex-direction: column;
        overflow: clip;
        transition: height .3s, background-color .3s;
        border-radius: .5rem;
    }

    .language-selector:hover, .language-selector:focus-within {
        height: var(--full-height);
        background-color: var(--light-gray);
    }

    .language {
        height: 1rem;
        display: block;
        color: inherit;
        text-decoration: none;
        padding: 1rem;
        transition: color .3s;
        background: transparent;
        white-space: nowrap;
    }

    button.language {
        height: 3rem;
        border: none;
        font-size: inherit;
        margin: 0;
        line-height: 1rem;
    }

    .language-flag, :global(.language-flag svg) {
        width: auto;
        height: .8rem;
        border-radius: .25rem;
    }

    .language-flag {
        margin-right: .25rem;
    }

    .language:hover:not(:first-child) {
        color: var(--primary-color);
    }

    .language:focus-visible {
        border: none;
        outline: none;
        box-shadow: inset 0 0 0 1px var(--primary-color);
        border-radius: .5rem;
    }

    .language:not(:last-child) {
        padding-bottom: .75rem;
    }

    .language:not(:first-child) {
        padding-top: .75rem;
    }
</style>
