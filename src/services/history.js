// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import historyRepository from "../repositories/history.js";
const TAG = "History Service: ";

const getHistory = async (civilizationId) => {
    // Padronizar a resposta

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

const HistoryServices = {
    getHistory: getHistory,
};

export default HistoryServices;
