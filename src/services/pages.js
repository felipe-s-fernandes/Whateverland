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

const getStartContent = (_id) => {
    let response = null;
    pagesDB.forEach((page) => {
        if (page.id === _id) {
            response = page;
        }
    });
    if (response !== null) {
        console.log(response);
        return response.start;
    }
};

const getHistoryContent = (_id) => {
    let response = null;
    pagesDB.forEach((page) => {
        if (page.id === _id) {
            response = page;
        }
    });
    if (response) {
        console.log(response);
        return response.history;
    }
};

const getGalleryContent = (_id) => {
    let response = null;
    pagesDB.forEach((page) => {
        if (page.id === _id) {
            response = page;
        }
    });
    if (response) {
        console.log(response);
        return response.gallery;
    }
};

const pagesServices = {
    getStartContent: getStartContent,
    getHistoryContent: getHistoryContent,
    getGalleryContent: getGalleryContent,
};

export default pagesServices;
