import regionsRepository from "../repositories/regions.js";
const TAG = "Regions Service: ";

const getRegions = () => {
    // Padronizar a resposta
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        const repoResponse = regionsRepository.getRegions();
        response.data = repoResponse;
        response.message = "Regions retrieved successfully.";
        return response;
    } catch (error) {
        response.message = "Repository error";
        response.error = error;
        throw error;
    }
};

const regionsServices = {
    getRegions: getRegions,
};

export default regionsServices;
