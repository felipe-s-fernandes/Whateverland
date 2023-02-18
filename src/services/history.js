// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}


import historyRepository from "../repositories/history.js";
const TAG = "History Service: ";

const getHistory = (civilizationId) => {
    // Padronizar a resposta

    try {
        const repoResponse = historyRepository.getHistory(
            Number(civilizationId)
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
} 

const HistoryServices = {
    getHistory: getHistory,
};

export default HistoryServices;
