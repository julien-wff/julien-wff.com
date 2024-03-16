<script lang="ts">
    import { onDestroy, onMount } from 'svelte';

    let ball: HTMLElement;
    let timer: number;

    onMount(() => {
        applyRandomTransform();
        timer = setInterval(applyRandomTransform, 3100);
    });

    onDestroy(() => {
        clearInterval(timer);
    });

    function applyRandomTransform() {
        const x = (Math.random() - .5) * 30;
        const y = (Math.random() - .5) * 30;
        const scale = Math.random() * .5 + .5;
        ball.style.transform = `translate(${x}%, ${y}%) scale(${scale})`;
    }
</script>

<div class="landing-backdrop">
    <div class="ball" bind:this={ball}/>
    <div class="cover"/>
</div>

<style>
    .landing-backdrop {
        position: absolute;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        width: 100vw;
        background-color: #f5f5f5;
    }

    .ball {
        width: 85vw;
        height: 85vh;
        background: linear-gradient(45deg, var(--gradient-blue), var(--gradient-purple));
        border-radius: 50%;
        transition: transform 3s linear;
    }

    .cover {
        position: absolute;
        inset: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(255, 255, 255, 0.6);
        backdrop-filter: blur(100px);
    }
</style>

