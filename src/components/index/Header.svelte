<header>
    <nav>
        <a href="/">Projets</a>
        <a href="/resume">CV</a>
        <a href="https://github.com/julien-wff" rel="noreferrer noopener">GitHub</a>
        <a href="https://linkedin.com/in/julien-wff" rel="noreferrer noopener">LinkedIn</a>
    </nav>
</header>

<style>
    header {
        --header-color: color-mix(in srgb, var(--background-color) 60%, transparent 40%);
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: start;
        width: 100%;
        height: 7rem;
        z-index: 10;
        background: linear-gradient(
            180deg,
            var(--header-color) 0%,
            var(--header-color) 75%,
            transparent 100%
        );
        backdrop-filter: blur(1rem);
    }

    nav {
        display: flex;
        justify-content: space-around;
        align-items: center;
        height: 6rem;
        width: 50%;
    }

    a {
        padding: 1rem 2rem;
        text-decoration: none;
        color: inherit;
    }

    @media screen and (max-width: 48rem) {
        header {
            height: 5rem;
        }

        nav {
            width: 100%;
            justify-content: space-evenly;
            height: 4rem;
        }

        a {
            padding: .5rem 1rem;
        }
    }
</style>
