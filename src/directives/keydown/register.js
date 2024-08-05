/**
 * @type {() => import('astro').AstroIntegration}
 */
export default () => ({
    name: 'client:keydown',
    hooks: {
        'astro:config:setup': ({ addClientDirective }) => {
            addClientDirective({
                name: 'keydown',
                entrypoint: './src/directives/keydown/keydown.js',
            });
        },
    },
});
