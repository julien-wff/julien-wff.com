<script lang="ts">
    export let emoji: string;
    export let text: string;
    export let delay: number;
    export let animationDuration: number;
</script>

<span class="subtitle" style="animation-delay: {delay}s; animation-duration: {animationDuration}s">
    <span class="subtitle-icon">{emoji}</span>
    <span class="subtitle-text">{text}</span>
</span>

<style>
    .subtitle {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        animation: appear 0s linear infinite;
        display: flex;
        gap: 0.25rem;
    }

    .subtitle-icon {
        display: flex;
        width: 1.25rem;
        height: 1.25rem;
        align-items: center;
        justify-content: center;
    }

    .subtitle-text {
        height: 1.25rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    @keyframes appear {
        5% {
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        20% {
            opacity: 1;
        }
        25% {
            opacity: 0;
        }
    }
</style>
