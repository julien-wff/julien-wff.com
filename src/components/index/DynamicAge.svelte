<script lang="ts">
    import { onDestroy } from 'svelte';
    import { type Language, useTranslations } from '$i18n/utils.ts';
    import { indexTranslations } from '$i18n/translations';

    export let language: Language;

    const t = useTranslations(indexTranslations, language);

    const birthday = new Date('2003-05-29 08:00:00').getTime();

    let currentAge = getAge();
    let continueAnimation = true;
    let revealFullAge = false;

    // TODO: inexact calculation to a few hours, but who cares
    // I already spent too much time on this
    // Using a lib is not an option, come on, it's just maths *cries in despair*
    function getAge() {
        const diff = Date.now() - birthday;
        const age = new Date(diff);

        return {
            years: age.getUTCFullYear() - 1970,
            months: age.getUTCMonth(),
            days: age.getUTCDate() - 1,
            hours: age.getUTCHours(),
            minutes: age.getUTCMinutes(),
            seconds: age.getUTCSeconds(),
            milliseconds: age.getUTCMilliseconds(),
        };
    }

    function setCurrentAge() {
        currentAge = getAge();
        if (continueAnimation)
            requestAnimationFrame(setCurrentAge);
    }

    function handleMouseHover() {
        if (revealFullAge)
            return;

        revealFullAge = true;
        continueAnimation = true;
        setCurrentAge();
    }

    function handleMouseLeave() {
        revealFullAge = false;
        continueAnimation = false;
    }

    onDestroy(() => {
        continueAnimation = false;
    });
</script>

<span on:mouseenter={handleMouseHover} on:mouseleave={handleMouseLeave} role="note">
    {#if !revealFullAge}
        {currentAge.years}&nbsp;{t("age.years-old")}*,
    {:else}
        {t("age.precisely")}
        {currentAge.years}&nbsp;{t("age.years")}
        {currentAge.months}&nbsp;{t("age.months")}
        {currentAge.days}&nbsp;{t("age.days")}
        {currentAge.hours}&nbsp;{t("age.hours")}
        {currentAge.minutes}&nbsp;{t("age.minutes")}
        {currentAge.seconds}&nbsp;{t("age.seconds")}
        {currentAge.milliseconds}&nbsp;{t("age.milliseconds")}
    {/if}
</span>
