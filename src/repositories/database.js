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
            event_paragraph: "Parágrafo placeholder",
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
            civilization_id: 1,
        },
        {
            gallery_image_id: "galeria-img2.png",
            civilization_id: 1,
        },
        {
            gallery_image_id: "galeria-img3.png",
            civilization_id: 1,
        },
        {
            gallery_image_id: "galeria-img4.png",
            civilization_id: 2,
        },
        {
            gallery_image_id: "galeria-img5.png",
            civilization_id: 2,
        },
        {
            gallery_image_id: "galeria-img6.png",
            civilization_id: 2,
        },
    ],
};

export default database;
