// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import { connectDb } from "./database/connection.js";
import query from "./database/queries.js";
const TAG = "History Repository: ";

const getHistory = async (civilizationId) => {
    try {
        const response = {
            history_events: null,
        };

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

const postHistory = async (historyObject) => {
    try {
        const response = {
            event: null,
        };

        const historyResponse = await connectDb(query.postHistoryEvents, [
            historyObject.civilization_id,
            historyObject.event_year,
            historyObject.event_title,
            historyObject.event_image,
            historyObject.event_image_label,
            historyObject.event_paragraph,
        ]);

        response.event = historyResponse;
        return response;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const patchHistory = async (historyObject) => {
    try {
        const response = {
            event: null,
        };

        await connectDb(query.getCivilizationById, [
            historyObject.civilization_id,
        ]);

        const historyResponse = await connectDb(query.patchHistoryEvents, [
            historyObject.event,
            historyObject.event_year,
            historyObject.event_title,
            historyObject.event_image,
            historyObject.event_image_label,
            historyObject.event_paragraph,
        ]);

        response.event = historyResponse;
        return response;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const historyRepository = {
    getHistory: getHistory,
    postHistory: postHistory,
    patchHistory: patchHistory,
};

export default historyRepository;
