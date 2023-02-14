const TAG = "Pages Repository: ";

const pagesDB = [
    {
        id: "1",
        name: "Erebonia",
        start: `Texto inicial da página de Erebonia`,
        history: `História de Erebonia`,
        gallery: `Galeria de imagens de Erebonia`,
    },
    {
        id: "2",
        name: "Crossbell",
        start: `Texto inicial da página de Crossbell`,
        history: `História de Crossbell`,
        gallery: `Galeria de imagens de Crossbell`,
    },
    {
        id: "3",
        name: "Calvard",
        start: `Texto inicial da página de Calvard`,
        history: `História de Calvard`,
        gallery: `Galeria de imagens de Calvard`,
    },
];

const getArticle = (_id) => {
    try {
        const query = pagesDB.filter((page) => page.id === _id);
        if (query.length > 0) return query[0];
        throw new Error("Page not found");
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const pagesRepository = {
    getArticle: getArticle,
};

export default pagesRepository;
