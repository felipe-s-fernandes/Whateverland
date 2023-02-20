// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import database from "./database.js";
import { connectDb } from "./database/connection.js";
import query from "./database/queries.js";
const TAG = "History Repository: ";

const getHistory = async (civilizationId) => {
    try {
        const response = {
            history_events: null,
        };

        //Mock getHistory;
        /* const historyResponse = database.history_events.filter(
            (historyEvent) => historyEvent.civilization_id === civilizationId
        ); */
        const historyResponse = await connectDb(query.getHistory, [
            civilizationId,
        ]);

        response.history_events = historyResponse;

        if (response.history_events.length > 0) return response;
        throw new Error(
            `There are no history events for the civilization with id ${civilizationId}`
        );
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const historyRepository = {
    getHistory: getHistory,
};

export default historyRepository;
