/**
 * Hydrate on keypress
 * @type {import('astro').ClientDirective}
 */
export default (load, { value }, _) => {
    let loaded = false;

    window.addEventListener('keydown', async (ev) => {
        if (loaded)
            return;

        if (ev.key !== value.key || (value.ctrlKey && !ev.ctrlKey))
            return;

        if (value.preventDefault)
            ev.preventDefault();

        loaded = true;
        const hydrate = await load();
        await hydrate();
    });
}
