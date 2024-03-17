<script>
    import LandingBackdrop from "./LandingBackdrop.svelte";
</script>

<section>
    <LandingBackdrop/>

    <div class="content">
        <h1>
            Salut,
            <br>
            Moi c'est <span class="text-gradient">Julien</span>
        </h1>
        <div class="subtitle-container">
            <span>👨‍🎓 Étudiant en école d'ingénieur</span>
            <span>⌨️ Développeur fullstack</span>
            <span>💻 Passionné d'informatique</span>
            <span>🐈 J'adore les chats</span>
        </div>
    </div>
</section>

<style>
    section {
        position: relative;
        width: 100%;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content {
        z-index: 2;
    }

    h1 {
        font-size: 3rem;
        font-weight: 700;
        margin-bottom: .75rem;
    }

    .text-gradient {
        background: linear-gradient(90deg, var(--gradient-blue), var(--gradient-purple)) 50% 0;
        background-clip: text;
        background-size: 200% 100%;
        -webkit-text-fill-color: transparent;
    }

    .subtitle-container {
        position: relative;
    }

    .subtitle-container span {
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        animation: appear 16s linear infinite;
    }

    .subtitle-container span:nth-child(2) {
        animation-delay: 4s;
    }

    .subtitle-container span:nth-child(3) {
        animation-delay: 8s;
    }

    .subtitle-container span:nth-child(4) {
        animation-delay: 12s;
    }

    @keyframes appear {
        5% {
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        25% {
            opacity: 1;
        }
        30% {
            opacity: 0;
        }
    }
</style>
