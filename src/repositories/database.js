const database = {
    civilizations: [
        {
            civilization_id: 1,
            region_id: 0,
            start_page_id: 456,
            civilization_name: "Erebonia",
            civilization_image: "erebonia.webp",
            deleted: false,
        },
        {
            civilization_id: 2,
            region_id: 0,
            start_page_id: 457,
            civilization_name: "Calvard",
            civilization_image: "calvard.webp",
            deleted: false,
        },
        {
            civilization_id: 3,
            region_id: 0,
            start_page_id: 458,
            civilization_name: "Liberl",
            civilization_image: "calvard.webp",
            deleted: false,
        },
    ],
    start_pages: [
        {
            start_page_id: 456,
            official_name: "Erebonia",
            localization: "Região de Zemuria",
            capital: "Heimdallr",
            religion: "Igreja Septiana",
            government: "Monarquia constitucional (provável ditadura).",
            paragraph: "Parágrafo placeholder",
            deleted: false,
        },
        {
            start_page_id: 457,
            official_name: "Calvard",
            localization: "Região de Zemuria",
            capital: "Edith",
            religion: "Igreja Septiana",
            government: "República Federativa Democrática.",
            paragraph: "Parágrafo placeholder",
            deleted: false,
        },
    ],
    history_events: [
        {
            event: 123,
            civilization_id: 1,
            event_year: 1320,
            event_title: "Criação do império de Erebonia",
            event_image: "erebonia.webp",
            event_image_label: "Brasão do império de Erebonia",
            event_paragraph:
                "Erebonia borrowed its name from Erebos, the deity of darkness. It is said the land was shrouded in darkness before the nation of Erebonia was founded. In this land lived two factions, each centred around a Sept-Terrion: the kinship of the Sept-Terrion of Blaze and the Sept-Terrion of Earth. The Sept-Terrion brought prosperity and peace to their factions for several hundreds of years until one day, they went to war with each other, and their Guardians followed suit.\n\nThe treasures assumed the form of giants and the battle caused great calamities to the land. Realising the mistake they made, the factions made peace with each other. Their treasures, however, were locked in battle and continued for a thousand days until both exhausted the last of their strength. Their empty shells were flung to the furthest reaches of the land. The Blaze Guardian ended up enshrined on Bryonia Island, the Earth Guardian in Nord Highlands.",
        },
        {
            event: 124,
            civilization_id: 1,
            event_year: 1420,
            event_title: "Guerra de outubro",
            event_image: "erebonia.webp",
            event_image_label:
                "Tanques Achzen utilizados na guerra de outubro.",
            event_paragraph: "Parágrafo placeholder",
        },
    ],
    gallery: [
        {
            gallery_image_id: "galeria-img1.png",
            gallery_image_title: "Civilização 1",
            civilization_id: 1,
        },
        {
            gallery_image_id: "galeria-img2.png",
            gallery_image_title: "Civilização 1",
            civilization_id: 1,
        },
        {
            gallery_image_id: "galeria-img3.png",
            gallery_image_title: "Civilização 1",
            civilization_id: 1,
        },
        {
            gallery_image_id: "galeria-img4.png",
            gallery_image_title: "Civilização 2",
            civilization_id: 2,
        },
        {
            gallery_image_id: "galeria-img5.png",
            gallery_image_title: "Civilização 2",
            civilization_id: 2,
        },
        {
            gallery_image_id: "galeria-img6.png",
            gallery_image_title: "Civilização 2",
            civilization_id: 2,
        },
    ],
    regions: [
        {
            region_id: 0,
            region_path:
                '<path d="M1191 409.2l-0.7 5.5-2 6.4-3.3 3.1-2.3 5-0.5 2.6-2.6 1.8-1.5 6.7 0 0.8-0.8-0.2 0.1-3.2-0.8-2.2-2.9-2.5-0.9-4.6 0.6-4.8-2.6-0.4-0.4 1.4-3.4 0.4 1.5 1.8 0.5 3.9-3 3.5-2.7 4.6-2.9 0.7-4.8-3.7-2.1 1.3-0.5 1.8-2.9 1.3-0.2 1.3-5.6 0-0.8-1.3-4.1-0.3-2 1.1-1.6-0.5-2.9-3.8-1-1.7-4.1 0.9-1.5 2.9-1.3 5.8-2 1.2-1.7 0.7-0.5-0.3-1.9-1.9-0.4-2 0.8-2.6 0-2.7-3.3-4-0.7-2.7 0-1.6-2.1-1.9-0.1-3.7-1.3-2.5-1.9 0.4 0.5-2.4 1.4-2.6-0.7-2.7 1.8-2-1.2-1.5 1.3-3.9 2.5-4.8 4.8 0.5-1.1-25.5 0-2.7 6.4 0-0.5-12.8 22.3 0 21.5 0 22.1 0 2.1 6.3-1.2 1.1 1.2 6.7 2.5 7.6 2.2 1.6 3.2 2.4-2.7 3.6-4 1.1-1.7 2-0.3 4.2-2 9.5 0.7 2.5z"></path>',
            region_name: "Zemuria",
            region_summary: "Resumo da região Zemuria",
            region_image: "region0.jpg",
            deleted: false,
        },
        {
            region_id: 1,
            region_path:
                '<path d="M1068.6 355l1.6 10 2.2 1.7 0.1 2 2.4 2.2-1.2 2.8-1.8 13-0.2 8.4-7 6-2.3 8.5 2.4 2.4 0 4.1 3.7 0.1-0.6 3.1-1.5 0.3-0.2 2.1-1 0.1-3.9-7-1.4-0.3-4.3 3.6-4.4-1.9-3-0.3-1.6 0.9-3.3-0.2-3.3 2.7-2.9 0.2-6.8-3.3-2.7 1.5-2.9-0.1-2.1-2.4-5.6-2.4-6.1 0.8-1.4 1.3-0.8 3.7-1.6 2.6-0.4 5.8-4.3-3.7-2 0-1.9 1.9 0.1-4.4-6.5-1.5-0.2-3.1-3.1-4.2-0.8-2.9 0.5-3.1 3.6-0.3 2-2.3 7.7-0.5 5-1 0.4-4 3.1-4.3-0.1-14.8 7.8-2.8 16-12.6 18.8-12.3 8.8 2.8 3.2 3.5 3.8-2.4z"</path>',
            region_name: "Kanto",
            region_summary: "Resumo da região Kanto",
            region_image: "region1.jpg",
            deleted: false,
        },
        {
            region_id: 2,
            region_path:
                '<path d="M1119.2 376.1l1.1 25.5-4.8-0.5-2.5 4.8-1.3 3.9 1.2 1.5-1.8 2 0.7 2.7-1.4 2.6-0.5 2.4 1.9-0.4 1.3 2.5 0.1 3.7 2.1 1.9 0 1.6-3.6 1.1-2.8 2.6-4 7-5.2 3-5.5-0.4-1.6 0.6 0.6 2.2-2.9 2.3-2.4 2.5-7.1 2.4-1.4-1.4-1-0.2-1 1.7-4.6 0.5 0.8-1.8-1.8-4.4-0.8-2.6-2.5-1.1-3.4-3.8 1.2-3 2.6 0.6 1.6-0.4 3.2 0-3.2-5.8 0.2-4.3-0.5-4.2-2.3-4.1 0.6-3.1-3.7-0.1 0-4.1-2.4-2.4 2.3-8.5 7-6 0.2-8.4 1.8-13 1.2-2.8-2.4-2.2-0.1-2-2.2-1.7-1.6-10 5.5-3.5 22.5 12.3 22.6 12.3z"></path>',
            region_name: "Sertão",
            region_summary: "Resumo da região Sertão",
            region_image: "region2.jpg",
            deleted: false,
        },
    ],
};

export default database;
