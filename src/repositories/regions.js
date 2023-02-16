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

const regionsRepository = {
    getRegions: getRegions,
};

export default regionsRepository;
