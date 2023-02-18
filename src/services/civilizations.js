import civilizationsRepository from "../repositories/civilizations.js";
const TAG = "Civilizations Service: ";

const getCivilizations = (regionId) => {
    // Padronizar a resposta

    try {
        const repoResponse = civilizationsRepository.getCivilizations(
            Number(regionId)
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const getCivilizationById = (civilizationId) => {
    // Padronizar a resposta

    try {
        const repoResponse = civilizationsRepository.getCivilizationById(
            Number(civilizationId)
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
} 

const civilizationsServices = {
    getCivilizations: getCivilizations,
    getCivilizationById: getCivilizationById,
};

export default civilizationsServices;
