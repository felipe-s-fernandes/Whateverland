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

const getRegionById = (regionId) => {
    // Padronizar a resposta

    try {
        const repoResponse = regionsRepository.getRegionById(Number(regionId));
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const regionsServices = {
    getRegions: getRegions,
    getRegionById: getRegionById,
};

export default regionsServices;
