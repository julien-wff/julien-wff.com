<script lang="ts">
    import { onDestroy } from 'svelte';

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
        {currentAge.years}&nbsp;ans*
    {:else}
        très&nbsp;exactement
        {currentAge.years}&nbsp;ans
        {currentAge.months}&nbsp;mois
        {currentAge.days}&nbsp;jours
        {currentAge.hours}&nbsp;heures
        {currentAge.minutes}&nbsp;minutes
        {currentAge.seconds}&nbsp;secondes et
        {currentAge.milliseconds}&nbsp;millisecondes
    {/if}
</span>
