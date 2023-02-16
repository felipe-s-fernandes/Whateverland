import civilizationsRepository from "../repositories/civilizations.js";
const TAG = "Civilizations Service: ";

const getCivilizations = (regionId) => {
    // Padronizar a resposta
    const response = {
        message: "",
        data: null,
        error: null,
    };

    try {
        const repoResponse = civilizationsRepository.getCivilizations(
            Number(regionId)
        );
        response.data = repoResponse;
        response.message = "Civilizations retrieved successfully.";
        return response;
    } catch (error) {
        response.message = "Repository error";
        response.error = error;
        throw error;
    }
};

const civilizationsServices = {
    getCivilizations: getCivilizations,
};

export default civilizationsServices;
