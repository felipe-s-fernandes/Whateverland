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
} 

const startServices = {
    getStart: getStart,
};

export default startServices;
