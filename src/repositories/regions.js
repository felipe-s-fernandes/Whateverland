import query from "./database/queries.js";
import { connectDb } from "./database/connection.js";
const TAG = "Regions Repository: ";

const getRegions = async () => {
    try {
        const response = {
            regions: null,
        };

        const regionsResponse = await connectDb(query.getRegions);

        response.regions = regionsResponse;

        if (response.regions.length > 0) return response;
        throw new Error("There are no regions in the database");
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const getRegionById = async (regionId) => {
    try {
        const response = {
            region: null,
        };

        const regionsResponse = await connectDb(query.getRegionById, [
            regionId,
        ]);

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
