<script lang="ts">
    import { defaultLanguage, languagesDisplay, type Language } from '../../i18n/utils.ts';

    export let currentLanguage: Language;

    const additionalLanguagesCount = Object.keys(languagesDisplay).length - 1;
    const fullHeight = 3 + additionalLanguagesCount * 2.5; // Rem

    const languagesKeys = new Set(Object.keys(languagesDisplay) as Language[]);
    languagesKeys.delete(currentLanguage);
</script>

<div class="language-selector" style="--full-height: {fullHeight}rem">
    <button class="language">
        {languagesDisplay[currentLanguage]}
    </button>
    {#each Array.from(languagesKeys) as language}
        <a class="language" href="/{language === defaultLanguage ? '' : language}">
            {languagesDisplay[language]}
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
