import 'astro';

declare module 'astro' {
    interface AstroClientDirectives {
        'client:keydown'?: {
            key: string;
            ctrl?: boolean;
            preventDefault?: boolean;
        };
    }
}
