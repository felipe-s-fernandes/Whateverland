// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import database from "./database.js";
const TAG = "Start Repository: ";

const getStart = (civilizationId) => {
    try {
        const response = {
            start_page: null,
        };

        //Mock getStart;
        const civilizationResponse = database.start_pages.filter(
            (startPage) => startPage.civilization_id === civilizationId
        );

        response.start_page = civilizationResponse;

        if (response.start_page.length > 0) return response;
        throw new Error(
            `Start page for civilization with id ${civilizationId} not found.`
        );
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const startRepository = {
    getStart: getStart,
};

export default startRepository;
