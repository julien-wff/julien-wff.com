#!/usr/bin/env bun

import { Glob } from 'bun';
import path from 'node:path';
import config from '../astro.config.mjs';

function error(message: string): never {
    console.error(`Error: ${message}`);
    process.exit(1);
}

// Get locales from astro.config.mjs
const locales = config.i18n?.locales || [];
if (locales.length === 0) {
    error('No locales found in astro.config.mjs');
}

console.log(`Found ${locales.length} locales: ${locales.join(', ')}`);

// Get all content files in src/content/projects
const glob = new Glob('./src/content/projects/**/*.{md,mdx}');
const files = [ ...glob.scanSync('.') ];
const sep = path.sep === '/' ? '/' : '\\\\';
const nameLangRegex = new RegExp(String.raw`${sep}([a-z0-9_-]+)${sep}[a-z0-9_-]+\.([a-z]{2})\.mdx?$`, 'i');

// Classify files by name and language
const classifiedFiles = files.reduce((acc, file) => {
    const [ _, name, lang ] = nameLangRegex.exec(file) || [];

    if (!name) {
        error(`Could not extract name from file: ${file}`);
    }

    if (!lang) {
        error(`Could not extract language from file: ${file}`);
    }

    if (!locales.includes(lang as any)) {
        error(`Language "${lang}" in file "${file}" is not in the list of locales: ${locales.join(', ')}`);
    }

    if (!acc[name]) {
        acc[name] = {};
    }
    acc[name][lang] = file;
    return acc;
}, {} as Record<string, Record<string, string>>);

console.log(`Found ${Object.keys(classifiedFiles).length} projects.`);

// Check for missing translations
for (const [ name, langs ] of Object.entries(classifiedFiles)) {
    const missingLangs = locales.filter(locale => !langs[locale]);
    if (missingLangs.length > 0) {
        error(`Project "${name}" is missing translations for: ${missingLangs.join(', ')}`);
    }
}

console.log('All projects have translations for all locales.');
