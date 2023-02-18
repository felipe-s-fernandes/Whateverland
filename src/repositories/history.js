// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import database from "./database.js";
const TAG = "History Repository: ";

const getHistory = (civilizationId) => {
    try {
        const response = {
            civilization: null,
        };

        //Mock getHistory;
        const civilizationResponse = database.history_events.filter(
            (civilization) => civilization.civilization_id === civilizationId
        );

        response.civilization = civilizationResponse;

        if (response.civilization.length > 0) return response;
        throw new Error("Civilizations not found");
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
}

const historyRepository = {
    getHistory: getHistory,
};

export default historyRepository;
