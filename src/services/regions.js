import regionsRepository from "../repositories/regions.js";
const TAG = "Regions Service: ";

const getRegions = async () => {
    // Standardize response

    try {
        const repoResponse = await regionsRepository.getRegions();
        return repoResponse;
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const getRegionById = async (regionId) => {
    // Standardize response

    try {
        const repoResponse = await regionsRepository.getRegionById(
            Number(regionId)
        );
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
