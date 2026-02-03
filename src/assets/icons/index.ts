import type { SvgComponent } from 'astro/types';
import bun from './bun.svg';
import cloudflare from './cloudflare.svg';
import csharp from './csharp.svg';
import docker from './docker.svg';
import dotnet from './dotnet.svg';
import expo from './expo.svg';
import figma from './figma.svg';
import githubActions from './githubactions.svg';
import golang from './golang.svg';
import googleCloud from './google-cloud.svg';
import java from './java.svg';
import kotlin from './kotlin.svg';
import nixos from './nixos.svg';
import nodejs from './nodejs.svg';
import postgresql from './postgres.svg';
import powerbi from './powerbi.svg';
import python from './python.svg';
import react from './react.svg';
import springBoot from './springboot.svg';
import sqlite from './sqlite.svg';
import sqlServer from './sqlserver.svg';
import svelte from './svelte.svg';
import typescript from './typescript.svg';

export const techIcons = {
    bun: [ bun, 'Bun' ],
    cloudflare: [ cloudflare, 'Cloudflare' ],
    csharp: [ csharp, 'C#' ],
    docker: [ docker, 'Docker' ],
    dotnet: [ dotnet, '.NET' ],
    expo: [ expo, 'Expo' ],
    figma: [ figma, 'Figma' ],
    githubActions: [ githubActions, 'GitHub Actions' ],
    golang: [ golang, 'Golang' ],
    googleCloud: [ googleCloud, 'Google Cloud' ],
    java: [ java, 'Java' ],
    kotlin: [ kotlin, 'Kotlin' ],
    nixos: [ nixos, 'NixOS' ],
    nodejs: [ nodejs, 'Node.js' ],
    postgresql: [ postgresql, 'PostgreSQL' ],
    powerbi: [ powerbi, 'Power BI' ],
    python: [ python, 'Python' ],
    react: [ react, 'React' ],
    springBoot: [ springBoot, 'Spring Boot' ],
    sqlite: [ sqlite, 'SQLite' ],
    sqlServer: [ sqlServer, 'SQL Server' ],
    svelte: [ svelte, 'Svelte' ],
    typescript: [ typescript, 'TypeScript' ],
} satisfies { [key: string]: [ icon: SvgComponent & ImageMetadata, displayName: string ] };

export type TechIconKey = keyof typeof techIcons;
export type TechIconValue = typeof techIcons[TechIconKey];
