import civilizationsRepository from "../repositories/civilizations.js";
const TAG = "Civilizations Service: ";

const getAllCivilizations = async () => {
    try {
        const repoResponse =
            await civilizationsRepository.getAllCivilizations();
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const getCivilizations = async (regionId) => {
    // Standardize response

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
    // Standardize response

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

const postCivilization = async (regionId, civilizationName) => {
    try {
        const repoResponse = await civilizationsRepository.postCivilization(
            Number(regionId),
            civilizationName
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const patchCivilization = async (civilizationObject) => {
    try {
        const repoResponse = await civilizationsRepository.patchCivilization(
            civilizationObject
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const deleteCivilization = async (civilizationId) => {
    try {
        const repoResponse = await civilizationsRepository.deleteCivilization(
            Number(civilizationId)
        );
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const civilizationsServices = {
    getAllCivilizations: getAllCivilizations,
    getCivilizations: getCivilizations,
    getCivilizationById: getCivilizationById,
    postCivilization: postCivilization,
    patchCivilization: patchCivilization,
    deleteCivilization: deleteCivilization,
};

export default civilizationsServices;
