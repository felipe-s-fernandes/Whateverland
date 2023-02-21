// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import historyRepository from "../repositories/history.js";
const TAG = "History Service: ";

const getHistory = async (civilizationId) => {
    try {
        const repoResponse = await historyRepository.getHistory(
            Number(civilizationId)
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const postHistory = async (historyObject) => {
    try {
        if (Number.isInteger(Number(historyObject.event_year))) {
            throw new Error("History event year must be an integer");
        }
        const repoResponse = await historyRepository.postHistory(historyObject);
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const patchHistory = async (historyObject) => {
    try {
        if (Number.isInteger(Number(historyObject.event_year))) {
            throw new Error("History event year must be an integer");
        }
        const repoResponse = await historyRepository.patchHistory(
            historyObject
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const HistoryServices = {
    getHistory: getHistory,
    postHistory: postHistory,
    patchHistory: patchHistory,
};

export default HistoryServices;
