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
            gallery_image_id: "galeria-img2.png",
            gallery_image_title: "Civilização 1",
            civilization_id: 1,
        },
        {
            gallery_image_id: "galeria-img1.png",
            gallery_image_title: "Civilização 1",
            civilization_id: 1,
        },
        {
            gallery_image_id: "galeria-img1.png",
            gallery_image_title: "Civilização 2",
            civilization_id: 2,
        },
        {
            gallery_image_id: "galeria-img2.png",
            gallery_image_title: "Civilização 1",
            civilization_id: 1,
        },
        {
            gallery_image_id: "galeria-img2.png",
            gallery_image_title: "Civilização 1",
            civilization_id: 1,
        },
        {
            gallery_image_id: "galeria-img2.png",
            gallery_image_title: "Civilização 1",
            civilization_id: 1,
        },
        {
            gallery_image_id: "galeria-img2.png",
            gallery_image_title: "Civilização 2",
            civilization_id: 2,
        },
        {
            gallery_image_id: "galeria-img2.png",
            gallery_image_title: "Civilização 2",
            civilization_id: 2,
        },
    ],
};

export default database;
