import database from "./database.js";
const TAG = "Pages Repository: ";

const getArticle = (_id) => {
    try {
        const response = {
            civilization: null,
            startPage: null,
            history: null,
            gallery: null,
        };

        //Mock getCivilization;
        const civilizationResponse = database.civilizations.filter(
            (civilization) => civilization.civilization_id === _id
        );

        //Mock getStartPage;
        const civilizationStartPage = database.start_pages.filter(
            (start_page) =>
                start_page.start_page_id ===
                civilizationResponse[0].start_page_id
        );

        //Mock getHistory;
        const civilizationHistory = database.history_events.filter(
            (history_event) => history_event.civilization_id === _id
        );

        //Mock getGallery;
        const civilizationGallery = database.gallery.filter(
            (gallery_image) => gallery_image.civilization_id === _id
        );

        response.civilization = civilizationResponse;
        response.startPage = civilizationStartPage;
        response.history = civilizationHistory;
        response.gallery = civilizationGallery;

        if (response.civilization.length > 0) return response;
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
