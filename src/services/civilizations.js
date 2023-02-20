import civilizationsRepository from "../repositories/civilizations.js";
const TAG = "Civilizations Service: ";

const getCivilizations = async (regionId) => {
    // Padronizar a resposta

    try {
        const repoResponse = await civilizationsRepository.getCivilizations(
            Number(regionId)
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const getCivilizationById = async (civilizationId) => {
    // Padronizar a resposta

    try {
        const repoResponse = await civilizationsRepository.getCivilizationById(
            Number(civilizationId)
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const postCivilization = (regionId, civilizationName) => {
    // Padronizar a resposta

    try {
        const repoResponse = civilizationsRepository.getCivilizationById(
            Number(regionId),
            civilizationName
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const civilizationsServices = {
    getCivilizations: getCivilizations,
    getCivilizationById: getCivilizationById,
    postCivilization: postCivilization,
};

export default civilizationsServices;
