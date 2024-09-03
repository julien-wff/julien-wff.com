import 'astro';

declare module 'astro' {
    interface AstroClientDirectives {
        'client:keydown'?: {
            key: string;
            ctrlKey?: boolean;
            preventDefault?: boolean;
        };
    }
}
