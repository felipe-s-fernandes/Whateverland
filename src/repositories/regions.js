import database from "./database.js";
const TAG = "Regions Repository: ";

const getRegions = () => {
    try {
        const response = {
            regions: null,
        };

        //Mock getRegions;
        const regionsResponse = database.regions;

        response.regions = regionsResponse;

        if (response.regions.length > 0) return response;
        throw new Error("There are no regions in the database");
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const getRegionById = (regionId) => {
    try {
        const response = {
            region: null,
        };

        //Mock getRegionById;
        const regionsResponse = database.regions.filter(
            (region) => region.region_id === regionId
        );

        response.region = regionsResponse;

        if (response.region.length > 0) return response;
        throw new Error(`Region ${regionId} not found.`);
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const regionsRepository = {
    getRegions: getRegions,
    getRegionById: getRegionById,
};

export default regionsRepository;
