import dedent from 'dedent';

export const indexTranslations = {
    en: {
        'nav.projects': 'Projects',
        'nav.resume': 'Résumé',
        'landing.hello': 'Hi there,',
        'landing.im': 'My name\'s',
        'landing.cs-student': 'CS Engineering Student',
        'landing.fullstack-dev': 'Fullstack Developer',
        'landing.it-passionate': 'IT Passionate',
        'landing.french': 'French',
        'landing.love-cats': 'Cat Lover',
        'about-me.who-am-i': 'Who am I? 🤔',
        'about-me.julien': 'Julien. I\'m pretty sure you already knew it.',
        'about-me.age-im': 'I\'m',
        'about-me.life-in-france': 'and I\'ve spent most of my life in the Grand Est region of France.',
        'about-me.early-years': dedent`
            At first, my parents suggested I become an architect. And then, after spending a few thousand
            hours on Scratch, my Lego Mindstorms and Automate, I started to have another idea in mind.
        `,
        'about-me.code': dedent`
            I typed my first lines of code in 2018, and I never really stopped since. Today, I'm in engineering
            school, and IT is at the center of my life.
        `,
        'age.precisely': 'very precisely',
        'age.years-old': 'years old',
        'age.years': 'years',
        'age.months': 'months',
        'age.days': 'days',
        'age.hours': 'hours',
        'age.minutes': 'minutes',
        'age.seconds': 'seconds and',
        'age.milliseconds': 'milliseconds old,',
        'projects.title': 'Flagship projects',
        'projects.website': 'Visit',
        'projects.source-code': 'Source code',
        'projects.bdecesinancy.title': 'BDE CESI Nancy',
        'projects.bdecesinancy.description': 'Website of the Student Office of CESI Nancy',
        'projects.homelab.title': 'Homelab',
        'projects.homelab.description': dedent`
            Self-hosted services infrastructure on my server. NixOS for reproducible deployment, Docker Compose
            for services, Cloudflare DNS and tunnel, HomeAssistant under KVM.`,
        'projects.cesi-dossier-synthese.title': 'Grades tools',
        'projects.cesi-dossier-synthese.description': 'Visualization and simulation of CESI grades',
        'projects.easysave.title': 'EasySave',
        'projects.easysave.description': 'CLI and WPF file backup applications',
        'projects.backry.title': 'Backry',
        'projects.backry.description': 'Self-hostable database backup solution',
        'projects.health-ai.title': 'Health AI',
        'projects.health-ai.description': 'Mobile chatbot application for health advice',
    },
    fr: {
        'nav.projects': 'Projets',
        'nav.resume': 'CV',
        'landing.hello': 'Salut,',
        'landing.im': 'Moi c\'est',
        'landing.cs-student': 'Étudiant en école d\'ingénieur',
        'landing.fullstack-dev': 'Développeur Fullstack',
        'landing.it-passionate': 'Passionné d\'informatique',
        'landing.french': 'Français',
        'landing.love-cats': 'J\'adore les chats',
        'about-me.who-am-i': 'Qui suis-je? 🤔',
        'about-me.julien': 'Julien. Je pense que vous l\'aviez compris',
        'about-me.age-im': 'J\'ai',
        'about-me.life-in-france': 'et j\'ai passé à peu près toute ma vie dans le Grand Est de la France.',
        'about-me.early-years': dedent`
            Au début, mes parents m'ont orienté vers architecte. Et puis, après avoir passé quelques milliers
            d'heures sur Scratch, mon Lego Mindstorms et Automate, j'ai commencé à avoir une autre idée derrière la
            tête.
        `,
        'about-me.code': dedent`
            J'ai tapé mes premières lignes de code en 2018, et je n'ai jamais vraiment arrêté depuis. Aujourd'hui, je
            suis en école d'ingénieur, et l'informatique est au centre de ma vie.
        `,
        'age.precisely': 'très exactement',
        'age.years-old': 'ans',
        'age.years': 'ans',
        'age.months': 'mois',
        'age.days': 'jours',
        'age.hours': 'heures',
        'age.minutes': 'minutes',
        'age.seconds': 'secondes et',
        'age.milliseconds': 'millisecondes,',
        'projects.title': 'Projets phares',
        'projects.website': 'Visiter',
        'projects.source-code': 'Code source',
        'projects.bdecesinancy.title': 'BDE CESI Nancy',
        'projects.bdecesinancy.description': 'Site web du Bureau des Élèves du CESI Nancy',
        'projects.homelab.title': 'Homelab',
        'projects.homelab.description': dedent`
            Infrastructure de services auto-hébergés sur mon serveur. NixOS pour un déploiement reproductible,
            Docker Compose pour les services, DNS et tunnel Cloudflare, HomeAssistant sous KVM.`,
        'projects.cesi-dossier-synthese.title': 'Dossiers de synthèse',
        'projects.cesi-dossier-synthese.description': 'Visualisation et simulation des notes CESI',
        'projects.easysave.title': 'EasySave',
        'projects.easysave.description': 'Applications de sauvegarde de fichiers CLI et WPF',
        'projects.backry.title': 'Backry',
        'projects.backry.description': 'Backup pour bases de données auto-hébergeable',
        'projects.health-ai.title': 'Health AI',
        'projects.health-ai.description': 'Application mobile de chatbot pour conseils santé',
    },
} as const;
