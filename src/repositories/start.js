// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import database from "./database.js";
const TAG = "Start Repository: ";

const getStart = (civilizationId) => {
    try {
        const response = {
            civilization: null,
        };

        //Mock getStart;
        const civilizationResponse = database.start_pages.filter(
            (civilization) => civilization.start_page_id === civilizationId
        );

        response.civilization = civilizationResponse;

        if (response.civilization.length > 0) return response;
        throw new Error("Civilization not found");
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
}

const startRepository = {
    getStart: getStart,
};

export default startRepository;
