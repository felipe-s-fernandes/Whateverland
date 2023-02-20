import database from "./database.js";
import query from "./database/queries.js";
import { connectDb } from "./database/connection.js";
const TAG = "Regions Repository: ";

const getRegions = async () => {
    try {
        const response = {
            regions: null,
        };

        //Mock getRegions;
        // const regionsResponse = database.regions;
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

        //Mock getRegionById;
        /* const regionsResponse = database.regions.filter(
            (region) => region.region_id === regionId
        ); */
        const regionsResponse = await connectDb(query.getRegionById, [
            regionId,
        ]);

        // const database = connectDb("SELECT * FROM regions");
        // const civilizationsResponse = database.filter(
        //     (civilization) => civilization.region_id === regionId
        // );
        // console.log(database);

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
