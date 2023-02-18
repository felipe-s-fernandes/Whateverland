// Autor {Anderson Lima}
// CoAutor {Felipe Fernandes}


import startRepository from "../repositories/start.js";
const TAG = "Start Service: ";

const getStart = (civilizationId) => {
    // Padronizar a resposta

    try {
        const repoResponse = startRepository.getStart(
            Number(civilizationId)
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
} 

const startServices = {
    getStart: getStart,
};

export default startServices;
