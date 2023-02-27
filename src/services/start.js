// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}

import startRepository from "../repositories/start.js";
const TAG = "Start Service: ";

const getStart = async (civilizationId) => {
    // Padronizar a resposta

    try {
        const repoResponse = await startRepository.getStart(
            Number(civilizationId)
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const patchStart = async (startObject) => {
    // Padronizar a resposta

    try {
        const repoResponse = await startRepository.patchStart(startObject);
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const searchStart = async (string) => {
    // Padronizar a resposta

    try {
        const repoResponse = await startRepository.searchStart(
            "%" + string + "%"
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const startServices = {
    getStart: getStart,
    patchStart: patchStart,
    searchStart: searchStart,
};

export default startServices;
