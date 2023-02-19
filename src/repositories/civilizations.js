import database from "./database.js";
const TAG = "Civilizations Repository: ";

const getCivilizations = (regionId) => {
    try {
        const response = {
            civilizations: null,
        };

        //Mock getCivilizations;
        const civilizationsResponse = database.civilizations.filter(
            (civilization) => civilization.region_id === regionId
        );
        // connectDb(query, arrayElements)

        response.civilizations = civilizationsResponse;

        if (response.civilizations.length > 0) return response;
        throw new Error("Civilizations not found");
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
};

const getCivilizationById = (civilizationId) => {
    try {
        const response = {
            civilization: null,
        };

        //Mock getCivilizationById;
        const civilizationResponse = database.civilizations.filter(
            (civilization) => civilization.civilization_id === civilizationId
        );

        response.civilization = civilizationResponse;

        if (response.civilization.length > 0) return response;
        throw new Error("Civilizations not found");
    } catch (error) {
        console.log(TAG, "error caught");
        throw error;
    }
}

const civilizationsRepository = {
    getCivilizations: getCivilizations,
    getCivilizationById: getCivilizationById,
};

export default civilizationsRepository;
